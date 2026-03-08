# ARG 実装資料インデックス

このディレクトリは、VSCode 上で Codex に読ませる前提の実装資料一式です。

## 読む順番
1. `CODEX_IMPLEMENTATION_GUIDE.md`
2. `01_PRODUCT_OVERVIEW.md`
3. `02_ARCHITECTURE.md`
4. `03_DATA_CONTRACT.md`
5. `04_SEARCH_AND_PHASE_RULES.md`
6. `05_UI_LAYOUT_AND_DOMAINS.md`
7. `06_SPREADSHEET_IMPORT_SPEC.md`
8. `07_IMPLEMENTATION_CHECKLIST.md`

## 前提ファイル
- スプレッドシート: `arg_route_v10_edit.xlsx`
- 利用シート名: `シート1 (1)`
- 既存合意設計: `../arg_design_spec_v5.md`

## 実装スコープ
- Vite + React 前提
- クライアントサイド中心
- ブログと本体サイトは別ドメイン
- 検索主導の ARG 進行
- Phase0 / Phase1 / Phase2 / Phase3 / Phase4 / Phase5 / Phase-End を持つ

## 絶対に守ること
- 検索は完全一致のみ
- 複数ワード検索なし
- 人名検索は空白なし
- スプレッドシートの「このページを検索するためのワード」は実装時に意味を変えない
- LocalStorage で `currentPhase` と `readPages` を保持する
- ページ URL は `/page-name-00000` 形式
- 右下に小さく `PhaseX (n)` を表示する
