<template>
  <q-dialog v-model="modal" persistent>
    <MainCard v-bind="$props">
      <slot />
    </MainCard>
  </q-dialog>
</template>

<script setup lang="ts">
const modal = ref(false);

watchEffect(() => {
  modal.value = props.open;
});

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  title: String,
});
</script>
