import Link from "next/link";
import Image from "next/image";
import { client, queries } from "@/lib/wp";

type Node = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: { node?: { sourceUrl?: string } };
};

export default function Evidence({ items }: { items: Node[] }) {
  return (
    <main className="container">
      <h1 className="text-2xl md:text-3xl font-semibold my-4">健康實證</h1>
      <p style={{opacity:.6}}>count: {items?.length ?? 0}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((p) => (
          <Link key={p.slug} href={`/evidence/${p.slug}`} className="card">
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
export async function getServerSideProps() {
  try {
    const data = await client.request(queries.listByCategory, { cat: "evidence", first: 12 });
    return { props: { items: data?.posts?.nodes ?? [] } };
  } catch (e) {
    return { props: { items: [] } };
  }
}
