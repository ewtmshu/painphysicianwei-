// lib/wp.ts
import { GraphQLClient, gql } from "graphql-request";
const endpoint = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!;
export const client = new GraphQLClient(endpoint);

export const queries = {
  listByCategory: gql`
    query ListByCategory($cat: String!, $first: Int! = 12) {
      posts(where: { categoryName: $cat }, first: $first) {
        nodes {
          slug
          title
          excerpt
          date
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
