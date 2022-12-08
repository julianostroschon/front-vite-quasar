<script setup lang="ts">
defineProps<{ msg: string }>()

const t = useI18n()

function toogleLocale() {
  // change to some real logic
  const locales = t.availableLocales
  // console.log(t.locale.value)
  t.locale.value = locales[(locales.indexOf(t.locale.value) + 1) % locales.length]
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="(count = increment(count))">Aumentar cadernos</button>
    <button type="button" @click="(count = decrement(count))">Diminuir cadernos</button>
    <button type="button" @click="toogleLocale">reset</button>
  </div>

  <p>
    
    {{ $t('caderno.quantidade', count) }}
  </p>
  <!-- {{ user }} -->
  <!-- <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
