<template>
  <q-toolbar :class="backgroundColor">
    <q-toolbar-title :class="textColor"> Header </q-toolbar-title>
    <ToggleTheme />
    <!-- <q-btn flat @click="toggleDark()" :icon="themeIcon" :text-color="color" /> -->
  </q-toolbar>
</template>
