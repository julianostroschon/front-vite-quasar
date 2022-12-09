import { useMutation } from 'villus'

export async function runQuery(query: any, variables: any = {}) {
  // loga(query)
  const {data} = await useMutation(query, variables)
  loga(data.value)
  return data.value
}