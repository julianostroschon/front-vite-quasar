import { MaybeRef } from "@vueuse/core";
import { useQuery } from "villus";

export async function runQuery(
  query: MaybeRef<Document> | string,
  variables?: object
) {
  // loga(query)
  const { execute } = await useQuery({ query, variables });
  // loga(data.value)
  const { data } = await execute();
  return data.value;
}
