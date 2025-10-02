# PainPhysicianWei — Headless 前台（起始版）
update
update
- Next.js 14 + Tailwind（靜態輸出），已備好頁面：
  - `/`、`/doctor`、`/visit`、`/evidence`、`/cases`、`/social`
- WPGraphQL 接點環境變數：`NEXT_PUBLIC_WP_GRAPHQL_URL`
  - 未設定時，Evidence/Cases 會先顯示暫存資料。
- 部署：Vercel（建議）或任何支援靜態網站的服務。

## 本機啟動
```bash
npm i
npm run dev
```

## 建置輸出
```bash
npm run build
```

## 環境變數
- `NEXT_PUBLIC_WP_GRAPHQL_URL`: 例如 `https://cms.painphysicianwei.tw/graphql`

