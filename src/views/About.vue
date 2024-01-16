<template>
  <div class="title">
    <h1>{{ $t("about") }}</h1>
    <q-input v-model="name" type="text" filled class="bg-grey" />
    <q-btn :to="`/${name}/`">{{ $t("action.submit.index") }}</q-btn>
  </div>
  <FabButton />
</template>
<script setup lang="ts">
const name = ref("");
</script>

<style scoped>
.title {
  will-change: filter;
}
.title:hover {
  filter: drop-shadow(0 0 2em #646cffff);
}
</style>
