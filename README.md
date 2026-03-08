# arg-2

## ローカル起動方法

前提:
- Node.js 20 以上
- npm

手順:

```bash
npm install
npm run dev
```

- 開発サーバー: `http://localhost:5173/`
- 本番ビルド確認:

```bash
npm run build
npm run preview
```

## CloudFront 配信向け S3 配備ファイル

1. ビルドを作成

```bash
npm run build
```

2. S3 には `dist` ディレクトリ**配下のファイル一式**を配置
   - `dist/index.html`
   - `dist/assets/*`
   - そのほか `dist` 配下の生成ファイル

例（AWS CLI）:

```bash
aws s3 sync dist/ s3://<YOUR_BUCKET_NAME>/ --delete
```

CloudFront 設定の要点（SPA運用時）:
- Default root object: `index.html`
- Deep link 対応のため、`403` / `404` を `index.html` にフォールバック

