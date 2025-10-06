// pages/diag.tsx
import { client, queries } from "@/lib/wp";

export async function getServerSideProps() {
  try {
    const data = await client.request(queries.listByCategory, { cat: "evidence", first: 3 });
    return {
      props: {
        ok: true,
        url: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
        count: data?.posts?.nodes?.length ?? 0,
        sample: data?.posts?.nodes?.map(p => ({ slug: p.slug, title: p.title })) ?? [],
      },
    };
  } catch (e: any) {
    return { props: { ok: false, error: String(e) } };
  }
}

export default function Page(props: any) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
