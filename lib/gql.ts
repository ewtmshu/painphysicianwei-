import { GraphQLClient } from "graphql-request";
import { getSdk } from "./api"; // 如果你沒有 codegen，就改成直接 export client

export const client = new GraphQLClient(process.env.WP_GRAPHQL_ENDPOINT!);

export async function gq<T>(query: any, vars?: Record<string, any>): Promise<T> {
  return client.request<T>(query, vars);
}
