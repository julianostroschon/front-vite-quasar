<template>
  <q-expansion-item
    expand-separator
    :icon="item.icon"
    :label="$t(item.label)"
    default-opened
  >
    <SubItem
      v-for="subItem in item.subItems"
      :key="subItem"
      :sub-item="subItem"
    />
  </q-expansion-item>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>
