
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">PainPhysicianWei</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600">服務</a>
            <Link href="/evidence" className="hover:text-blue-600">健康實證</Link>
            <Link href="/cases" className="hover:text-blue-600">案例分享</Link>
          </nav>
          <Link href="/visit" className="btn">就診資訊</Link>
        </div>
      </header>

      <main className="container">
        <section className="border rounded-2xl p-6 my-6 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-3xl md:text-5xl font-semibold">讓疼痛與功能，一起回到正軌</h1>
          <p className="mt-2 text-sm text-gray-600">超音波導引・再生醫療・運動介入</p>
          <div className="mt-4 flex gap-3">
            <Link href="/visit" className="btn">立即看就診資訊</Link>
            <Link href="/evidence" className="btn">閱讀健康實證</Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <Link href="/doctor" className="card"><strong>醫師介紹</strong><p className="text-sm text-gray-600 mt-1">學經歷與理念</p></Link>
          <Link href="/visit" className="card"><strong>就診資訊</strong><p className="text-sm text-gray-600 mt-1">門診時段、地址、交通</p></Link>
          <Link href="/evidence" className="card"><strong>健康實證</strong><p className="text-sm text-gray-600 mt-1">PRP / BMAC 等</p></Link>
          <Link href="/cases" className="card"><strong>案例分享</strong><p className="text-sm text-gray-600 mt-1">去識別化臨床經驗</p></Link>
        </section>
      </main>
    </div>
  );
}
