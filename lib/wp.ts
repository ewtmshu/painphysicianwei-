// lib/wp.ts
import { GraphQLClient, gql } from "graphql-request";
const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;
export const client = new GraphQLClient(endpoint);

export const queries = {
  // 先用 slug 把分類 ID 查出來
  categoryIdBySlug: gql`
    query CatIdBySlug($slug: [String!]!) {
      categories(where: { slug: $slug }) {
        nodes { databaseId name slug }
      }
    }`,

  // 再用分類 ID 抓文章
  listByCategoryId: gql`
    query ListByCategoryId($ids: [ID], $first: Int! = 12) {
      posts(where: { categoryIn: $ids }, first: $first) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage { node { sourceUrl } }
        }
      }
    }`,

  // 單篇
  postBySlug: gql`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        featuredImage { node { sourceUrl } }
      }
    }`,
};
