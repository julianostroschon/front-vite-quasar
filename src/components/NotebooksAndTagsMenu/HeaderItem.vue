<template>
  <q-item-section avatar>
    <q-icon :name="item.icon" />
  </q-item-section>

  <q-item-section>
    {{ $t(item.label) }}
  </q-item-section>

  <q-item-section side v-if="item.addButton">
    <q-btn icon="add" flat round />
  </q-item-section>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>
