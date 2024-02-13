<template>
  <q-list v-for="(item, index) in list" :key="index" class="text-indigo-8">
    <q-item
      clickable
      @click="setLink(item)"
      :class="{ 'text-white bg-green rounded-borders': link === item.name }"
    >
      <q-item-section>{{ item.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { list } from "./lib";

const link = ref("");

const setLink = (item) => {
  link.value = item.name; // Or whatever property you want to use for the link
};
</script>
