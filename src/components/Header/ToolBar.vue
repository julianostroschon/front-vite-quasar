<template>
  <q-toolbar>
    <q-btn flat @click="$emit('openMenu')" round dense icon="menu" />
    <q-toolbar-title> Header </q-toolbar-title>
  </q-toolbar>
</template>

<script setup lang="ts">
defineEmits(["openMenu"]);
</script>
