<template>
  <q-item
    clickable 
    v-ripple 
  >
    <q-item-section>
      {{ subItem.name }} 
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineProps({
  subItem: {
    type: Object,
    default: () => ({})
  }
})
</script>