<template>
  <q-tabs v-model="tab" class="text-white bg-indigo-8">
    <q-tab
      no-caps
      v-for="item in tabItems"
      :key="item.name"
      :name="item.name"
      :label="item.label"
      class="text-bold"
      :class="{ 'text-indigo-8 bg-white rounded-borders': tab === item.name }"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { tabItems } from "./lib";
const tab = ref("");
</script>
