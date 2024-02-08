<template>
  <div class="custom-separator">
    <div class="line"></div>
    <div class="text" :style="{ width: large }">
      <h5 class="custom-text">{{ texto }}</h5>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  texto: {
    type: String,
    required: true,
  },
  large: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.custom-separator {
  display: flex;
  border: 0;
}
.line {
  flex-grow: 1;
  border-bottom: 10px solid var(--separator-color, #367c1e);
  height: 15px;
}
.text {
  background-color: rgba(0, 159, 0, 255);
  border-radius: 3px;
  color: white;
  bottom: 10px;
  position: relative;
  z-index: 1;
}
.custom-text {
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
  font-size: xx-large;
}
</style>
