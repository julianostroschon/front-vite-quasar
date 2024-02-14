<template>
  <div class="col-1 self-center">
    <q-btn
      flat
      :icon="props.icoBtn"
      class="bg-indigo-8"
      color="white"
      rounded
      @click="navSlides()"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  direction: {
    type: String,
    required: true,
  },
  icoBtn: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["navigation"]);

function navSlides() {
  emits("navigation", props.direction);
}
</script>
