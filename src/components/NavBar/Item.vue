<template>
  <q-expansion-item
    expand-separator
    :icon="item.icon"
    :label="item.label"
    default-opened
  >
    <q-item clickable v-ripple v-for="subItem in item.subItems" :key="subItem">
      <q-item-section> {{ subItem.name }} </q-item-section>
    </q-item>
  </q-expansion-item>

</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>