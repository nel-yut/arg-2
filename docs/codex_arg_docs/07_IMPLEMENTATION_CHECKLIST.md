# 実装チェックリスト

## 1. 基盤
- [ ] Vite + React + TypeScript を作成
- [ ] React Router を導入
- [ ] ルート構成を作成
- [ ] `pages.json` を読む基盤を作成

## 2. 型
- [ ] `ArgPage` 型を定義
- [ ] `SearchResult` 型を定義
- [ ] `PhaseState` 型を定義

## 3. LocalStorage
- [ ] `currentPhase` の読み書き
- [ ] `readPages` の読み書き
- [ ] 破損時の初期化

## 4. フェーズ制御
- [ ] `(1)` ページ閲覧時に Phase を進める
- [ ] 検索対象ページ集合を Phase に応じて絞る
- [ ] 過去 Phase は検索可能のままにする
- [ ] 次 Phase は `(1)` のみ許可する

## 5. 検索
- [ ] 完全一致検索のみ実装
- [ ] 複数ワード検索を無効化
- [ ] タイトルのみ返す UI を作る
- [ ] 並び順を `Phase順 -> (n)順` にする
- [ ] 0件時メッセージを仕様どおりに出す

## 6. レイアウト
- [ ] BlogLayout
- [ ] MainSiteLayout
- [ ] ArchiveLayout
- [ ] 右上検索UI
- [ ] 右下 Phase 表示
- [ ] `Phase4(31)` だけ検索UIを消す
- [ ] ブログには検索UIを出さない

## 7. ページレンダリング
- [ ] タイトル表示
- [ ] 本文表示
- [ ] 画像最大2枚表示
- [ ] 画像がないページでも崩れない

## 8. URL
- [ ] `/page-name-00000` 形式で動く
- [ ] path 解決が 404 へ落ちる
- [ ] ブログと本体の別レイアウトを分ける

## 9. import スクリプト（後続）
- [ ] Excel からシートを読む
- [ ] 行を JSON に変換
- [ ] slug / path を生成
- [ ] `searchWords` を配列化
- [ ] `imagePrompts` を配列化
- [ ] `pages.json` を出力

## 10. 最低限の確認シナリオ
- [ ] Phase0 から本体へ遷移できる
- [ ] Phase1 の検索導線で資料室へ入れる
- [ ] Phase2 の検索導線が切れない
- [ ] Phase3 の検索導線が切れない
- [ ] Phase4 の記録群へ到達できる
- [ ] Phase5 まで到達できる
- [ ] 0件検索メッセージが仕様どおり
- [ ] reload 後も LocalStorage が保持される
