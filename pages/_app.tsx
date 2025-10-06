// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";        // 第 4 步會建立
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
