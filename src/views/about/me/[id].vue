<template>
  <div>
    <h1>{{ id }}</h1>
    <Title />

  </div>
</template>
<script setup lang="ts">
defineProps<{id: string}>()
</script>