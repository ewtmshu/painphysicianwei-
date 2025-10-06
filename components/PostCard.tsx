// components/PostCard.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PostCard.module.css";

type Post = {
  slug: string;
  title: string;
  excerpt?: string | null;
  featuredImage?: { node?: { sourceUrl?: string | null } } | null;
};

export default function PostCard({ post, basePath }:{
  post: Post; basePath: "/evidence" | "/cases";
}) {
  const src = post.featuredImage?.node?.sourceUrl ?? "";
  return (
    <article className={styles.card}>
      <Link href={`${basePath}/${post.slug}`} className={styles.thumb}>
        {src ? (
          <Image src={src} alt={post.title} fill sizes="(max-width:600px) 100vw, 33vw" />
        ) : (
          <div className={styles.placeholder} />
        )}
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={`${basePath}/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && (
          <p className={styles.excerpt} dangerouslySetInnerHTML={{__html: post.excerpt}} />
        )}
      </div>
    </article>
  );
}
