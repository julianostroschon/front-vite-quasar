<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)


function doIt() {
  count.value += 1
  toggleLocales()
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="doIt">Aumentar cadernos</button>
    <button type="button" @click="count --">Diminuir cadernos</button>
    <button type="button" @click="(count = 0)">reset</button>
  </div>

  <p>
    
    {{ $t('caderno.quantidade', count) }}
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
