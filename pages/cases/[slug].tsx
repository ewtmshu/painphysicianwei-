import Image from "next/image";
import { client, queries } from "@/lib/wp";

export default function Post({ post }: any) {
  if (!post) return <main className="container">找不到文章</main>;
  return (
    <main className="container prose max-w-none">
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-72 mb-4 overflow-hidden rounded-xl">
          <Image src={post.featuredImage.node.sourceUrl} alt="" fill className="object-cover" />
        </div>
      )}
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

export async function getStaticPaths() {
  // 先不預取，用阻塞式生成
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  try {
    // ⬇⬇ 這兩行是關鍵：宣告回傳型別，並把 client.request 指定成這個型別
    type PostBySlugResp = {
      post: {
        title: string;
        content: string;
        featuredImage?: { node?: { sourceUrl?: string } };
      } | null;
    };
    const data = (await client.request(queries.postBySlug, { slug: params.slug })) as any;

    if (!data.post) return { notFound: true };
    return { props: { post: data.post }, revalidate: 60 };
  } catch {
    return { notFound: true };
  }
}
