<template>
  <i class="material-icons" @click="run">sunny</i>
  {{ isDark }}
</template>
<!-- carbon-sun -->
<!-- carbon-moon -->
<script setup lang="ts">
// isDark
function run() {
  toggleDark();
  console.log("rodou");
}
</script>
