<template>
  <q-header elevated class="bg-black">
    <q-toolbar>
      <q-btn 
        flat 
        @click="$emit('openMenu')" 
        round 
        dense 
        icon="menu" 
      />
      <q-toolbar-title>
        Header
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
defineEmits(['openMenu'])
</script>