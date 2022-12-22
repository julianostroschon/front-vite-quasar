<template>
  <q-list>
    <!-- <ItemList v-for="item in listItems" :key="item" :item="item" /> -->
  </q-list>
</template>

<script setup lang="ts">
defineProps({
  listItems: {
    type: Array,
    default: () => [],
  },
});
</script>
