<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count = increment(count)">Aumentar cadernos</button>
    <button type="button" @click="count = decrement(count)">Diminuir cadernos</button>
    <button type="button" @click="(count = 0)">reset</button>
  </div>

  <p>
    
    {{ $t('caderno.quantidade', count) }}
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
