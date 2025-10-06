// lib/wp.ts
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;
export const client = new GraphQLClient(endpoint);

export const queries = {
  // 用 slug 查分類，最穩
  listByCategory: gql`
    query ListByCategory($slug: [String]!, $first: Int! = 12) {
      posts(
        where: {
          taxQuery: {
            taxArray: [
              { taxonomy: CATEGORY, terms: $slug, field: SLUG, operator: IN }
            ]
          }
        }
        first: $first
      ) {
        nodes {
          slug
          title
          excerpt
          featuredImage { node { sourceUrl } }
        }
      }
    }`,

  postBySlug: gql`
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        featuredImage { node { sourceUrl } }
      }
    }`
};
