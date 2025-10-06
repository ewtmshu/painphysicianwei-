export async function getServerSideProps() {
  const url = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query($slug:[String]!) {
            posts(where:{ taxQuery:{ taxArray:[{taxonomy:CATEGORY, terms:$slug, field:SLUG}] }}, first:3){
              nodes{ slug title }
            }
          }`,
        variables: { slug: ["evidence"] }
      })
    });
    const json = await res.json();
    return { props: { ok: true, url, json } };
  } catch (e:any) {
    return { props: { ok: false, url, error: String(e) } };
  }
}

export default function Diag(p:any){
  return <pre style={{whiteSpace:'pre-wrap', padding:16}}>
    {JSON.stringify(p, null, 2)}
  </pre>;
}
