<template>
  <button @click="handleClick" class="button" :class="classBtn">
    <img src="./settings.svg" />
    <span>Create User</span>
  </button>
</template>
<script setup lang="ts">
const isLoading = ref(false);
const classBtn = computed(() => (isLoading.value ? "loading" : ""));

function handleClick() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 4000);
}
</script>
<style scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
}

@keyframes spin {
  100% {
    rotate: 360deg;
  }
}

.button.loading img {
  animation: spin 3s infinite linear;
}

.button > span:first-child {
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
}

.button > span > img {
  position: absolute;
  transition: 0.3s;
}

.button > span > img:first-child {
  top: 0;
  left: 0;
}
.button > span > img:last-child {
  right: 0;
  bottom: 0;
  width: 1rem;
  opacity: 0;
}

.button.loading img:first-child {
  width: 3rem;
}

.button.loading img:last-child {
  opacity: 1;
}
</style>
