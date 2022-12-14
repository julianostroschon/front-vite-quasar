<template>
  <q-card-section class="text-h5 text-center">
    {{ title }}
  </q-card-section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>
