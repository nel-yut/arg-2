# データ契約

## Page 型
```ts
export type SiteType = 'blog' | 'main' | 'archive' | 'ending';

export interface ArgPage {
  id: string;                 // 5桁数字文字列, e.g. "01428"
  slug: string;               // e.g. "dormitory-maintenance-report"
  path: string;               // e.g. "/dormitory-maintenance-report-01428"
  title: string;
  body: string;
  pageType: string;           // スプレッドシートの種別
  siteType: SiteType;
  overview?: string;
  contentSource?: string;     // スプレッドシート由来メモ
  phaseLabel: string;         // e.g. "Phase2"
  phaseOrder: number;         // 0,1,2,3,4,5,99(Phase-End など)
  phaseIndex: number | null;  // (1), (2), ... / ない場合は null
  pageIdRaw?: string;         // スプレッドシートのページID原文
  searchWords: string[];      // 完全一致検索用
  imagePrompts: string[];     // G/H列由来
  isSearchVisible: boolean;
  isPhaseBadgeVisible: boolean;
}
```

## SearchResult 型
```ts
export interface SearchResult {
  path: string;
  title: string;
  phaseOrder: number;
  phaseIndex: number | null;
}
```

## PhaseState 型
```ts
export interface PhaseState {
  currentPhase: number;   // 初期値 0
  readPages: string[];    // path か id を保持
}
```

## LocalStorage キー
```ts
const STORAGE_KEYS = {
  currentPhase: 'arg.currentPhase',
  readPages: 'arg.readPages'
} as const;
```

## ページ属性ルール
- `blog` と `Phase4(31)` は `isSearchVisible = false`
- すべてのページで `isPhaseBadgeVisible = true`
- ブログは `siteType = 'blog'`
- 資料室ページは `siteType = 'archive'`
- 一般HPは `siteType = 'main'`

## フェーズ順序
```ts
const PHASE_ORDER = {
  'Phase0': 0,
  'Phase1': 1,
  'Phase2': 2,
  'Phase3': 3,
  'Phase4': 4,
  'Phase5': 5,
  'Phase-End': 99,
} as const;
```

## Path 生成ルール
```ts
path = `/${slug}-${id}`;
```

- `id` は必ず 5 桁文字列
- `slug` は実装側で自動生成してよいが、重複しないこと
