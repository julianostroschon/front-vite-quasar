<script setup lang="ts">
useHead({
  title: "titulo",
  meta: [
    { name: "description", content: "Opinionated Vite Starter Template" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
});
</script>

<template>
  <layout>
    <template #content>
      <RouterView />
    </template>
  </layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
