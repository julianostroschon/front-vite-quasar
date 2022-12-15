<template>
  <q-card class="card-width">
    <CardHeader v-bind="$props" />
    <q-card-section align="center">
      <slot />
    </q-card-section>
    <CardFooter />
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style scoped>
.card-width {
  width: 30vw;
}
</style>
