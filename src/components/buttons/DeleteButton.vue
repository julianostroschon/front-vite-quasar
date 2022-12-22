<script setup lang="ts">
const isDeleting = ref(false);

const handleClick = () => {
  isDeleting.value = true;
  // do something async
  setTimeout(() => {
    isDeleting.value = false;
  }, 2500);
};
const btnClass = computed(() => (isDeleting.value ? "deleting" : ""));
const label = computed(() =>
  isDeleting.value ? "action.delete.ing" : "action.delete.index"
);
</script>
<template>
  <button @click="handleClick" :class="btnClass" :disabled="isDeleting">
    <span class="button-text">
      {{ $t(label) }}
    </span>
    <span class="animation">
      <span class="paper-wrapper">
        <span class="paper"></span>
      </span>
      <span class="shredded-wrapper">
        <span class="shredded"></span>
      </span>
      <span class="lid"></span>
      <span class="can">
        <span class="filler"></span>
      </span>
    </span>
  </button>
</template>
<style scoped>
button {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #ff2c6c;
  font-size: 22px;
  color: #f9f9f9;
  width: 210px;
  height: 64px;
  transition: 0.3s;
}

.button-text {
  flex: 0 0 120px;
}

.animation {
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  scale: 1;
}

.can {
  overflow: hidden;
  position: relative;
  translate: 0 3px;
  width: 20px;
  height: 22px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid #ffffff;
}

.lid {
  position: absolute;
  top: 20px;
  left: 50%;
  translate: -50% 0;
  width: 22px;
  height: 2px;
  background: #ffffff;
}

@keyframes move {
  75%,
  100% {
    translate: 0 88px;
  }
}

.paper-wrapper,
.shredded-wrapper {
  overflow: hidden;
  position: absolute;
  display: flex;
  top: -20px;
  left: 50%;
  margin-left: -5px;
  width: 10px;
  height: 64px;
}

.paper-wrapper {
  height: 40px;
}

.shredded-wrapper {
  top: 24px;
  height: 20px;
  justify-content: center;
}

.paper,
.shredded {
  display: block;
  background: #ffffff;
  height: 20px;
}

.paper {
  width: 10px;
}

.shredded {
  margin-top: -40px;
  width: 2px;
}

.shredded::before,
.shredded::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  width: inherit;
  height: inherit;
  background: inherit;
}

.shredded::before {
  left: -4px;
}

.shredded::after {
  right: -4px;
}

@keyframes fill {
  0%,
  20% {
    translate: 0 0;
  }
  40%,
  70% {
    translate: 0 -50%;
  }
  90%,
  100% {
    translate: 0 -100%;
  }
}

.filler {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -32px;
  width: 64px;
  height: 120%;
  background: #ffffff;
}

button:disabled {
  /* cursor: not-allowed; */
  opacity: 0.8;
}

button.deleting :is(.paper, .shredded) {
  animation: move 1.25s linear 2 both;
}

button.deleting .filler {
  animation: fill 2.5s both;
}
</style>
