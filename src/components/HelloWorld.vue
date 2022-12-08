<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
const user = useUserStore()

// function doIt() {
//   console.log(user)
//   // some.increment()
// }
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <button type="button" @click="doIt">Aumentar cadernos</button> -->
    <button type="button" @click="user.incrementAge()">Diminuir cadernos</button>
    <button type="button" @click="(count = 0)">reset</button>
  </div>

  <p>
    
    {{ $t('caderno.quantidade', count) }}
  </p>
  {{ user }}
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
