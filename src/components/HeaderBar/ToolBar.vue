<template>
  <q-toolbar>
    <q-btn
      flat
      @click="$emit('openMenu')"
      round
      dense
      :class="textColor"
      icon="menu"
    />
    <q-toolbar-title :class="textColor"> Header </q-toolbar-title>
    <ToggleTheme />

    <!-- <q-btn flat @click="toggleDark()" :icon="themeIcon" :text-color="color" /> -->
  </q-toolbar>
</template>

<script setup lang="ts">
defineEmits(["openMenu"]);
</script>
