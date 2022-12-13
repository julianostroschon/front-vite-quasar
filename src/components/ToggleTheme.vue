<template>
  <q-toggle
    @click="toggleDark()"
    :icon="themeIcon"
    v-model="value"
    :color="color"
    size="xl"
  />
</template>
<script setup lang="ts">
const value = ref(false);
</script>
