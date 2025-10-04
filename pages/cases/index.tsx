import Link from "next/link";
import Image from "next/image";
import { client, queries } from "@/lib/wp";

type Node = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: { node?: { sourceUrl?: string } };
};

export default function Cases({ items }: { items: Node[] }) {
  return (
    <main className="container">
      <h1 className="text-2xl md:text-3xl font-semibold my-4">案例分享</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((p) => (
          <Link key={p.slug} href={`/cases/${p.slug}`} className="card">
            {p.featuredImage?.node?.sourceUrl && (
              <div className="relative w-full h-44 mb-2 overflow-hidden rounded-lg">
                <Image src={p.featuredImage.node.sourceUrl} alt="" fill className="object-cover" />
              </div>
            )}
            <h3 className="font-medium" dangerouslySetInnerHTML={{ __html: p.title }} />
            <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: p.excerpt }} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  try {
    type ListByCategoryResp = { posts: { nodes: Node[] } };
    const data = await client.request<ListByCategoryResp>(queries.listByCategory, {
      cat: "cases",
      first: 12,
    });
    return { props: { items: data?.posts?.nodes ?? [] }, revalidate: 60 };
  } catch {
    return { props: { items: [] }, revalidate: 60 };
  }
}
