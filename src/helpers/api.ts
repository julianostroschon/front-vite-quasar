import { MaybeRef } from "@vueuse/core";
import { useQuery, useMutation } from "villus";

export async function runQuery(
  query: MaybeRef<Document>,
  variables: Record<string, Record<string, string>> | null = null
): Promise<Record<string, string | number>> {
  const { data } = (await useQuery({
    query,
    variables,
  }).execute()) as {
    data: Record<string, string | number>;
  };

  return data;
}

export async function runMutation(
  query: MaybeRef<Document>,
  variables: object
): Promise<Record<string, Record<string, string>>> {
  const { data } = (await useMutation(query).execute(variables)) as {
    data: Record<string, Record<string, string>>;
  };
  return data;
}
