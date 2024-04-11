import { MaybeRef } from "@vueuse/core";
import { DocumentNode, TypedQueryDocumentNode } from "graphql";
import { useQuery, useMutation } from "villus";

export async function runQuery<Output>(
  query: MaybeRef<
    | string
    | DocumentNode
    | TypedQueryDocumentNode<any, Record<string, Record<string, string>> | null>
  >,
  variables: Record<string, Record<string, string>> | null = null
): Promise<Output> {
  const { data } = (await useQuery({
    query,
    variables,
  }).execute()) as {
    data: Output;
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
