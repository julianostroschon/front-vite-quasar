<template>
  <DynamicDialog :open="open" :title="$t('caderno.addCaderno')">
    <NotebookForm />
  </DynamicDialog>
</template>

<script setup lang="ts">
const open = ref(false);
</script>
