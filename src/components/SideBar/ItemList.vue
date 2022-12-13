<template>
  <q-expansion-item hide-expand-icon class="text-left">
    <template v-slot:header>
      <HeaderItem v-bind="$props" />
    </template>
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
