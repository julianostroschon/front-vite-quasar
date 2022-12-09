<template>
  <div>
    <h1>{{ id }}</h1>
    <q-btn @click="ping">Ping</q-btn>
  </div>
</template>
<script setup lang="ts">
import { useQuery, useClient, useMutation } from 'villus'
defineProps<{id: string}>()
const query = `query Ping {
  ping
}`

useClient({
  url: 'http://localhost:4001'
});


await useQuery({query})
async function ping() {
  // getEnvironmentVariable('GQL_ENDPOINT')
}
</script>