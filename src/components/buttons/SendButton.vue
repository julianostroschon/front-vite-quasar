<script setup lang="ts">
const isSending = ref(false);
const isSent = ref(false);
const btnClass = computed(() =>
  isSending.value || isSent.value ? "sending" : ""
);
const icon = computed(() => (isSent.value ? "check" : "send"));
const handleClick = () => {
  isSending.value = true;
  setTimeout(() => {
    isSending.value = false;
    isSent.value = true;
    setTimeout(() => (isSent.value = false), 2500);
  }, 2000);
};

const label = computed(() =>
  isSending.value
    ? "action.submit.ing"
    : isSent.value
    ? "action.submit.ed"
    : "action.update.ed"
);
</script>
<template>
  <button @click="handleClick" :class="btnClass">
    <i class="material-icons icon">{{ icon }}</i>
    <span class="text">
      {{ $t(label) }}
    </span>
  </button>
</template>
<style scoped>
button {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  width: 208px;
  padding: 0 22px;
  border: 0;
  border-radius: 28px;
  color: #f7f7f7;
  background: #d62959;
  cursor: pointer;
}

.text {
  position: absolute;
  left: 64px;
  display: block;
  white-space: nowrap;
  font-size: 17px;
  font-weight: 600;
}

.icon {
  font-size: 30px;
}

button.sending .text {
  animation: textAnimation 5s both;
}

button.sending .icon {
  animation: iconAnimation 5s both;
}

@keyframes textAnimation {
  0%,
  30% {
    translate: 0 0;
  }
  39.9% {
    translate: 0 100px;
  }
  40% {
    translate: 300px 100px;
  }
  40.1% {
    translate: 300px -60px;
  }
  40.2% {
    translate: 33px -60px;
  }
  45% {
    translate: 33px 0;
  }
  95% {
    translate: 33px 0;
  }
  100% {
    translate: 0 0;
  }
}

@keyframes iconAnimation {
  0%,
  5% {
    translate: 0 0;
  }
  20%,
  30% {
    translate: -250px 0;
  }
  40% {
    translate: 200px 0;
    scale: 2;
  }
  40.1% {
    translate: 200px -60px;
    scale: 1;
  }
  40.2% {
    translate: 34px -60px;
  }
  45%,
  95% {
    translate: 34px 0;
  }
  100% {
    translate: 0 0;
  }
}
</style>
