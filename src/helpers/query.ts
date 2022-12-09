import { useQuery } from 'villus'

export async function runQuery(query: any, variables: any = {}) {
  // loga(query)
  const { execute } = await useQuery({query, variables})
  // loga(data.value)
  const { data } = await execute()
  return data.value
}