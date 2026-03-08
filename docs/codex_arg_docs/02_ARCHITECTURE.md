# アーキテクチャ設計

## 想定技術スタック
- Vite
- React
- TypeScript
- React Router
- LocalStorage

## 推奨ディレクトリ構成
```txt
src/
  app/
    router.tsx
    providers/
  pages/
    BlogPage.tsx
    SearchResultsPage.tsx
    ArgContentPage.tsx
    NotFoundPage.tsx
  layouts/
    BlogLayout.tsx
    MainSiteLayout.tsx
    ArchiveLayout.tsx
  components/
    SearchBox.tsx
    SearchResultsList.tsx
    PhaseBadge.tsx
    ImageBlock.tsx
    PageBody.tsx
  features/
    search/
      searchIndex.ts
      searchService.ts
    phase/
      phaseGate.ts
      phaseStore.ts
    pages/
      pageResolver.ts
  data/
    pages.json
  types/
    page.ts
    search.ts
    phase.ts
  utils/
    slug.ts
    storage.ts
    parsePhase.ts
```

## 実行時の責務
### router
- URL からページを解決する
- `slug-id` 形式を扱う

### pageResolver
- `pages.json` から path に一致するページを引く
- 存在しない場合は 404 へ

### phaseStore
- `currentPhase` / `readPages` を LocalStorage と同期する
- ページ閲覧時に既読を更新する
- `(1)` ページ閲覧時に該当 Phase を解放する

### searchService
- 完全一致のみで `searchWords` を比較する
- Phase 制御をかけたうえで結果を返す
- 結果は `Phase順 -> (n)順` に並べる

## レイアウト分割
### BlogLayout
- 検索UIなし
- 本体とは別スタイル
- ブログ記事一覧や 404 を表現

### MainSiteLayout
- 右上検索UIあり
- 右下 Phase 表示あり
- 宗教団体HP用の白背景系レイアウト

### ArchiveLayout
- 資料室ページ用
- 黒背景・秘匿資料風
- 右上検索UIあり
- 右下 Phase 表示あり

## 状態の流れ
1. ユーザーが URL にアクセス
2. ページを JSON から解決
3. レイアウトを `kind` または `siteType` で切替
4. ページ閲覧時に `readPages` を更新
5. `(1)` ページなら `currentPhase` を更新
6. 検索時に `searchService` が解放済みページだけを対象に返却
