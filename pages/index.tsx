// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-semibold mb-6">許哲維醫師</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        <li><Link className="card" href="/evidence">健康實證 →</Link></li>
        <li><Link className="card" href="/cases">案例分享 →</Link></li>
        <li><Link className="card" href="/doctor">醫師簡介 →</Link></li>
        <li><Link className="card" href="/visit">就醫指南 →</Link></li>
      </ul>
    </main>
  );
}
