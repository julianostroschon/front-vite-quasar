<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- <h2>{{ id }}</h2> -->
    <q-btn @click="ping">Ping</q-btn>
  </div>
</template>
<script setup lang="ts">
import path from 'node:path'
import { useQuery, useClient, useMutation } from 'villus'
defineProps<{ name: string, id: string }>()

const query = `query Ping {
  ping
}`

// const { data, execute } = (await useQuery({query}))
// result.value = 
async function ping() {
  loga((import.meta))
  // getEnvironmentVariable('GQL_ENDPOINT')
}
</script>