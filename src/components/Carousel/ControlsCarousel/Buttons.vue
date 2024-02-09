<template>
  <div
    class="btn-containerbg-grey-6 gt-sm inline mx-1"
    v-for="(item, index) in items"
    :key="index"
    width="auto"
  >
    <q-btn
      round
      padding="none"
      color="white"
      :icon="''"
      :size="isActive === index ? '7px' : '5px'"
      @click="setActive(index)"
    >
    </q-btn>
  </div>
</template>

<script setup lang="ts">
const items = ["ball", "ball", "ball", "ball", "ball"];

const isActive = ref();

function setActive(index: number) {
  isActive.value = index;
}
</script>
