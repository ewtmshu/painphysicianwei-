// lib/gql.ts —— 無 codegen 版本
import { GraphQLClient } from "graphql-request";

const endpoint = process.env.WP_GRAPHQL_ENDPOINT ?? ""; // 沒設時仍能通過 build，請之後補環境變數
export const client = new GraphQLClient(endpoint);

export async function gq<T>(query: any, variables?: Record<string, any>): Promise<T> {
  return client.request<T>(query, variables);
}
