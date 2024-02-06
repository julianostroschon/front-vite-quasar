<template>
  <q-tabs
    v-model="tab"
    class="tab-header text-white fixed-top"
    :style="{ backgroundColor: tabBackgroundColor }"
  >
    <q-item clickable to="/home" class="q-mx-md q-mt-sm">
      <q-toolbar-title class="q-pa-md">
        <q-avatar square class="ico bg-transparent">
          <img src="/logo_fundimisa.png" />
        </q-avatar>
      </q-toolbar-title>
    </q-item>
    <q-space />
    <q-tabs v-model="tab" class="font-tabs bg-transparent text-white q-pa-md">
      <q-tab
        no-caps
        v-for="item in tabItems"
        :key="item.name"
        :name="item.name"
        :label="item.label"
        :class="{ 'q-tab-active text-h4': tab === item.name }"
      />
    </q-tabs>

    <q-space />
    <q-btn size="xl" flat icon="settings" round class="setting_ico q-pa-md" />
  </q-tabs>
</template>
<script setup lang="ts">
import { tabItems } from "./lib";
const tab = ref("");
const tabBackgroundColor = ref("rgba(57, 73, 171, 1)");
window.addEventListener("scroll", function () {
  const scrollVertical = window.scrollY || window.pageYOffset;
  if (scrollVertical == 0) {
    return (tabBackgroundColor.value = "rgba(57, 73, 171, 1)");
  }
  return (tabBackgroundColor.value = "rgba(63, 81, 181, 0.8)");
});
</script>
<style scoped>
.ico {
  width: 100%;
}

.q-tab-active {
  background-color: white;
  color: rgb(47, 47, 145);
  border-radius: 10px;
}

.font-tabs {
  font-family: "Fira Sans", sans-serif;
}

.tab-header {
  width: 100%;
  z-index: 1000;
}
</style>
