# スプレッドシート import 仕様

この資料は、後続フェーズで実装する「スプレッドシート -> JSON」変換スクリプトの前提を整理する。

## 入力ファイル
- `arg_route_v10_edit.xlsx`
- 対象シート名: `シート1 (1)`

## 期待する列
現在のシートでは以下の意味で運用されている。

- A列: 作成するページ
- B列: 種別
- C列: ページの概要
- D列: コンテンツの内容
- E列: ページID
- F列: このページを検索するためのワード
- G列: コメント
- H列: コメント2

## 実装時の追加前提
ユーザー要件では、A列に **5桁数字文字列** を追加して URL を `/page-name-00000` にする。

そのため import スクリプト実装時には、以下のどちらかにする。

### 方式A
- 既存 A 列の前に新しい ID 列を追加した最新版シートを使う

### 方式B
- 既存シートから ID を別管理し、変換スクリプト側で付与する

推奨は **方式A**。

## PageID 解析ルール
E列の `ページID` から以下を抽出する。

例:
- `Phase1(3)` -> `phaseLabel = Phase1`, `phaseOrder = 1`, `phaseIndex = 3`
- `Phase0` -> `phaseLabel = Phase0`, `phaseOrder = 0`, `phaseIndex = null`
- `Phase-End` -> `phaseLabel = Phase-End`, `phaseOrder = 99`, `phaseIndex = null`

## 種別からの `siteType` 推定
例:
- `ブログ` -> `blog`
- `HP` -> `main`
- `資料室` -> `archive`
- Ending 系 -> `ending`

必要なら明示マッピングテーブルを持つ。

## F列の検索ワードの扱い
- 改行区切りで複数ワードが入っている前提を許可する
- trim して空文字は除外する
- 実装上は `string[]` に変換する
- **意味は変更しない**
- 並び順も可能な限り保持する

## G/H列の画像コメント
- null でなければ `imagePrompts` に入れる
- 最大 2 件

## 変換結果の出力
- `src/data/pages.json`
- 必要なら `public/data/pages.json`

## import スクリプトの責務
- Excel 読み込み
- 行ごとの空判定
- `phaseLabel / phaseOrder / phaseIndex` 抽出
- slug 生成
- path 生成
- `searchWords` 配列化
- `imagePrompts` 配列化
- `siteType` 判定
- JSON 出力

## slug 生成ルール
slug は実装側で英字化してよい。ただし以下を守る。
- 英小文字とハイフンのみ
- 同名衝突が起きないよう必要なら末尾に短い識別子を付与
- phase 名は必須ではない

例:
- `教育寮整備報告` -> `dormitory-maintenance-report`
- `第3教育寮面談記録抜粋` -> `third-dormitory-interview-excerpt`
