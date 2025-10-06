import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

function LocationCard({
  name,
  address,
  phone,
  time,
}: {
  name: string;
  address: string;
  phone: string;
  time: string;
}) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-sm transition">
      <h3 className="font-semibold">{name}</h3>
      <ul className="mt-2 space-y-1 text-sm text-gray-700">
        <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {address}</li>
        <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> {phone}</li>
        <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /> {time}</li>
      </ul>
    </div>
  );
}

export default function ClinicLanding() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500">Rehabilitation • Pain Medicine</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
              {siteConfig.brand}｜{siteConfig.doctor}
            </h1>
            <p className="mt-4 text-gray-700">
              以實證為本的疼痛診療與復健照護，提供客製化治療方案與清楚的健康教育。
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/evidence"
                className="inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:bg-black/90"
              >
                健康實證 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center rounded-xl px-4 py-2 border hover:bg-gray-50"
              >
                案例分享
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 快速聯絡 / 社群 */}
      <section className="container pb-4">
        <div className="rounded-2xl border p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-500">聯絡資訊</div>
              <div className="text-lg">
                <span className="font-semibold">{siteConfig.brand}</span>（{siteConfig.doctor}）
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> {siteConfig.contact.address}</li>
                <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> {siteConfig.contact.phone}</li>
                <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /> {siteConfig.contact.hours}</li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5" />
                  <a className="underline hover:no-underline" href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              {!!siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} aria-label="facebook" target="_blank" rel="noopener noreferrer"
                   className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-50">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {!!siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} aria-label="instagram" target="_blank" rel="noopener noreferrer"
                   className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-50">
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {!!siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} aria-label="youtube" target="_blank" rel="noopener noreferrer"
                   className="inline-flex h-9 w-9 items-center justify-content-center rounded-full border hover:bg-gray-50">
                  <Youtube className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 據點 */}
      <section className="container py-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">院所據點</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {siteConfig.locations.map((l, i) => (
            <LocationCard key={i} name={l.name} address={l.address} phone={l.phone} time={l.time} />
          ))}
        </div>
      </section>

      {/* 精選內容（接 WP 後也可改為動態） */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold">長文與影片</h2>
          <Link href="/evidence" className="text-sm text-gray-600 hover:text-black">更多</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {/* 這裡先靜態三塊，之後可改抓 WP 最新文章 */}
          <a href="https://www.instagram.com/painphysicianforyou" target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-4 hover:shadow-sm transition">
            <div className="font-medium mb-1">Instagram 精選</div>
            <p className="text-sm text-gray-700">門診衛教短片與日常復健知識。</p>
          </a>
          <a href={siteConfig.social.facebook || "#"} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-4 hover:shadow-sm transition">
            <div className="font-medium mb-1">Facebook 專頁</div>
            <p className="text-sm text-gray-700">長文衛教與案例分享。</p>
          </a>
          <a href={siteConfig.social.youtube || "#"} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-4 hover:shadow-sm transition">
            <div className="font-medium mb-1">YouTube</div>
            <p className="text-sm text-gray-700">復健醫學／疼痛治療影片。</p>
          </a>
        </div>
      </section>
    </main>
  );
}
