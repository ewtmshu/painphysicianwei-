// pages/api/wp-check.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { client, queries } from "@/lib/wp";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cat = (req.query.cat as string) || "evidence";
  const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || "https://cms.painphysicianwei.tw/graphql";
  try {
    const data = await client.request(queries.listByCategory, { cat, first: 12 });
    const nodes = data?.posts?.nodes ?? [];
    res.status(200).json({
      endpoint,
      cat,
      count: nodes.length,
      sample: nodes.slice(0, 2).map((n: any) => ({ slug: n.slug, title: n.title })),
    });
  } catch (e: any) {
    res.status(500).json({ endpoint, cat, error: String(e?.message || e) });
  }
}
