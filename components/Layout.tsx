// components/Layout.tsx
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>許哲維醫師</Link>
          <nav className={styles.nav}>
            <Link href="/evidence">健康實證</Link>
            <Link href="/cases">案例分享</Link>
            <Link href="/doctor">醫師介紹</Link>
            <Link href="/visit">就診資訊</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          © {new Date().getFullYear()} 許哲維醫師 ｜ Kaohsiung, Taiwan
        </div>
      </footer>
    </>
  );
}
