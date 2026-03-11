param(
  [string]$InputPath = "source/spreadsheet/arg_route_v10_edit.xlsx",
  [string]$OutputPath = "src/data/pages.ts"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

$phaseOrderMap = @{
  'Phase0' = 0
  'Phase1' = 1
  'Phase2' = 2
  'Phase3' = 3
  'Phase4' = 4
  'Phase5' = 5
  'Phase-End' = 99
}

function Get-ZipXmlContent {
  param(
    [string]$Root,
    [string]$RelativePath
  )
  $path = Join-Path $Root $RelativePath
  return [xml](Get-Content -Raw -Encoding UTF8 $path)
}

function Parse-SharedStrings {
  param([xml]$SharedStringsXml)
  $ns = New-Object System.Xml.XmlNamespaceManager($SharedStringsXml.NameTable)
  $ns.AddNamespace('d', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
  $items = @()
  $nodes = $SharedStringsXml.SelectNodes('//d:sst/d:si', $ns)
  foreach ($node in $nodes) {
    $texts = $node.SelectNodes('.//d:t', $ns) | ForEach-Object { $_.InnerText }
    $items += ($texts -join '')
  }
  return $items
}

function Get-CellValue {
  param(
    [System.Xml.XmlElement]$Row,
    [string]$Column,
    [System.Xml.XmlNamespaceManager]$Ns,
    [string[]]$SharedStrings
  )
  $cell = $Row.SelectSingleNode("./d:c[starts-with(@r,'$Column')]", $Ns)
  if ($null -eq $cell) { return $null }
  $vNode = $cell.SelectSingleNode('./d:v', $Ns)
  if ($null -eq $vNode) { return $null }
  if ($cell.t -eq 's') { return $SharedStrings[[int]$vNode.InnerText] }
  return $vNode.InnerText
}

function Parse-Phase {
  param([string]$Raw)
  if ([string]::IsNullOrWhiteSpace($Raw)) { return $null }
  $normalized = $Raw.Trim()
  if ($normalized -match '^(Phase(?:-End|\d))(?:\((\d+)\))?$') {
    return [pscustomobject]@{
      phaseLabel = $matches[1]
      phaseIndex = if ($matches[2]) { [int]$matches[2] } else { $null }
    }
  }
  return $null
}

function Get-SiteType {
  param(
    [string]$Category,
    [string]$PhaseLabel
  )
  if ($Category -eq 'ブログ' -or $PhaseLabel -eq 'Phase-End') { return 'blog' }
  if ($Category -eq '資料室') { return 'archive' }
  if ($PhaseLabel -eq 'Phase5') { return 'ending' }
  return 'main'
}

function Escape-TemplateLiteral {
  param([string]$Value)
  return $Value.Replace('\', '\\').Replace('`', '\`').Replace('${', '\${')
}

function New-Slug {
  param(
    [string]$Title,
    [string]$PhaseLabel,
    [Nullable[int]]$PhaseIndex
  )
  $ascii = (($Title.ToLowerInvariant() -replace '[^a-z0-9]+', '-') -replace '^-+|-+$', '')
  if (-not [string]::IsNullOrWhiteSpace($ascii)) { return $ascii }
  $phasePart = ($PhaseLabel.ToLowerInvariant() -replace '[^a-z0-9]+', '-')
  $indexPart = if ($null -ne $PhaseIndex) { $PhaseIndex.ToString() } else { '0' }
  return "page-$phasePart-$indexPart"
}

$tmp = Join-Path $env:TEMP ("argxlsx_" + [guid]::NewGuid().ToString())
[System.IO.Directory]::CreateDirectory($tmp) | Out-Null

try {
  [System.IO.Compression.ZipFile]::ExtractToDirectory((Resolve-Path $InputPath), $tmp)

  $workbook = Get-ZipXmlContent -Root $tmp -RelativePath 'xl/workbook.xml'
  $rels = Get-ZipXmlContent -Root $tmp -RelativePath 'xl/_rels/workbook.xml.rels'
  $sharedXml = Get-ZipXmlContent -Root $tmp -RelativePath 'xl/sharedStrings.xml'

  $workbookNs = New-Object System.Xml.XmlNamespaceManager($workbook.NameTable)
  $workbookNs.AddNamespace('d', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
  $sheetNode = $workbook.SelectSingleNode("//d:sheets/d:sheet[@name='シート1 (1)']", $workbookNs)
  if ($null -eq $sheetNode) {
    throw '対象シート「シート1 (1)」が見つかりません。'
  }

  $rid = $sheetNode.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
  $relNode = $rels.Relationships.Relationship | Where-Object { $_.Id -eq $rid }
  if ($null -eq $relNode) {
    throw 'workbook.xml.rels に対象シートのリレーションがありません。'
  }

  $sheetXml = Get-ZipXmlContent -Root $tmp -RelativePath (Join-Path 'xl' $relNode.Target)
  $sharedStrings = Parse-SharedStrings -SharedStringsXml $sharedXml

  $sheetNs = New-Object System.Xml.XmlNamespaceManager($sheetXml.NameTable)
  $sheetNs.AddNamespace('d', 'http://schemas.openxmlformats.org/spreadsheetml/2006/main')
  $rowNodes = $sheetXml.SelectNodes('//d:worksheet/d:sheetData/d:row', $sheetNs)

  $pages = New-Object System.Collections.Generic.List[object]
  $phaseCounters = @{}

  foreach ($row in $rowNodes) {
    $rowNo = [int]$row.r
    if ($rowNo -lt 3) { continue }

    $title = Get-CellValue -Row $row -Column 'A' -Ns $sheetNs -SharedStrings $sharedStrings
    $category = Get-CellValue -Row $row -Column 'B' -Ns $sheetNs -SharedStrings $sharedStrings
    $overview = Get-CellValue -Row $row -Column 'C' -Ns $sheetNs -SharedStrings $sharedStrings
    $body = Get-CellValue -Row $row -Column 'D' -Ns $sheetNs -SharedStrings $sharedStrings
    $pageIdRaw = Get-CellValue -Row $row -Column 'E' -Ns $sheetNs -SharedStrings $sharedStrings
    $searchWordRaw = Get-CellValue -Row $row -Column 'F' -Ns $sheetNs -SharedStrings $sharedStrings
    $comment1 = Get-CellValue -Row $row -Column 'G' -Ns $sheetNs -SharedStrings $sharedStrings
    $comment2 = Get-CellValue -Row $row -Column 'H' -Ns $sheetNs -SharedStrings $sharedStrings
    $pageNum = Get-CellValue -Row $row -Column 'I' -Ns $sheetNs -SharedStrings $sharedStrings

    if ([string]::IsNullOrWhiteSpace($title) -and [string]::IsNullOrWhiteSpace($pageIdRaw)) { continue }

    $phase = Parse-Phase -Raw $pageIdRaw
    if ($null -eq $phase) { continue }

    if (-not $phaseOrderMap.ContainsKey($phase.phaseLabel)) {
      throw "未知のPhaseラベルです: $($phase.phaseLabel) (row=$rowNo)"
    }

    $idCandidateA = if ($title -match '^\d{5}$') { $title } else { $null }
    $idCandidateI = if ($pageNum -match '^\d{5}$') { $pageNum } else { $null }
    $id = if ($idCandidateA) { $idCandidateA } elseif ($idCandidateI) { $idCandidateI } else { $null }
    if ($null -eq $id) {
      throw "5桁IDが取得できません。A列またはI列(page_num)に5桁数字が必要です。row=$rowNo"
    }

    $phaseLabel = $phase.phaseLabel
    $phaseIndex = $phase.phaseIndex
    if ($null -eq $phaseIndex) {
      if (-not $phaseCounters.ContainsKey($phaseLabel)) { $phaseCounters[$phaseLabel] = 0 }
      $phaseCounters[$phaseLabel] += 1
      $phaseIndex = [int]$phaseCounters[$phaseLabel]
    }

    $searchWords = @()
    if (-not [string]::IsNullOrWhiteSpace($searchWordRaw)) {
      $searchWords = $searchWordRaw -split "`r?`n" | ForEach-Object { $_.Trim() } | Where-Object { $_.Length -gt 0 }
    }

    $imagePrompts = @()
    foreach ($c in @($comment1, $comment2)) {
      if (-not [string]::IsNullOrWhiteSpace($c)) { $imagePrompts += $c.Trim() }
    }

    $slug = New-Slug -Title $title -PhaseLabel $phaseLabel -PhaseIndex $phaseIndex
    $siteType = Get-SiteType -Category $category -PhaseLabel $phaseLabel
    $phaseOrder = [int]$phaseOrderMap[$phaseLabel]
    $isSearchVisible = -not ($siteType -eq 'blog' -or ($phaseLabel -eq 'Phase4' -and $phaseIndex -eq 31))

    $pages.Add([ordered]@{
      id = $id
      slug = $slug
      path = "/$slug-$id"
      title = $title
      body = if ($body) { $body } else { '' }
      pageType = if ($category) { $category } else { '' }
      siteType = $siteType
      overview = if ($overview) { $overview } else { '' }
      phaseLabel = $phaseLabel
      phaseOrder = $phaseOrder
      phaseIndex = $phaseIndex
      pageIdRaw = if ($pageIdRaw) { $pageIdRaw } else { '' }
      searchWords = @($searchWords)
      imagePrompts = @($imagePrompts)
      isSearchVisible = $isSearchVisible
      isPhaseBadgeVisible = $true
    }) | Out-Null
  }

  $outDir = Split-Path -Parent $OutputPath
  if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
  }

  $lines = New-Object System.Collections.Generic.List[string]
  $lines.Add("import { expandPageSources } from '../features/pages/expandPageSources';") | Out-Null
  $lines.Add("import type { ArgPage, ArgPageSource } from '../types/page';") | Out-Null
  $lines.Add('') | Out-Null
  $lines.Add('// Edit `body` with normal line breaks.') | Out-Null
  $lines.Add('// If a page changes by phase, add `phaseVariants` inside the same block.') | Out-Null
  $lines.Add('export const pageSources: ArgPageSource[] = [') | Out-Null

  foreach ($page in $pages) {
    $lines.Add('  {') | Out-Null

    foreach ($prop in $page.PSObject.Properties) {
      $name = $prop.Name
      $value = $prop.Value

      if ($value -is [string]) {
        if ($name -eq 'body') {
          $serialized = [string][char]96 + (Escape-TemplateLiteral -Value $value) + [char]96
        }
        else {
          $serialized = ConvertTo-Json -InputObject $value -Compress
        }
      }
      else {
        $serialized = ConvertTo-Json -InputObject $value -Compress
      }

      $lines.Add("    ${name}: ${serialized},") | Out-Null
    }

    $lines.Add('  },') | Out-Null
  }

  $lines.Add('];') | Out-Null
  $lines.Add('') | Out-Null
  $lines.Add('export const pages: ArgPage[] = expandPageSources(pageSources);') | Out-Null
  $lines.Add('') | Out-Null
  Set-Content -Path $OutputPath -Value $lines -Encoding UTF8
  Write-Output ("Wrote {0} pages to {1}" -f $pages.Count, $OutputPath)
}
finally {
  if (Test-Path $tmp) {
    Remove-Item -Recurse -Force $tmp
  }
}
