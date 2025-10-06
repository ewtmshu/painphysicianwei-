import { client, queries } from "../../lib/wp";
import PostCard from "../../components/PostCard";
import styles from "../../styles/PostCard.module.css";

export default function EvidencePage({ posts }:{posts:any[]}) {
  return (
    <>
      <h1 className="pageTitle">健康實證</h1>
      <p className="muted">共有 {posts.length} 篇</p>
      <div className={styles.grid}>
        {posts.map((p:any) => (
          <PostCard key={p.slug} post={p} basePath="/evidence" />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.request(queries.listByCategory, { cat: "evidence", first: 24 });
  return { props: { posts: data?.posts?.nodes ?? [] }, revalidate: 60 };
}
