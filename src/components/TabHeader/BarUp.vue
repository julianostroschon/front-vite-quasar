<template>
  <q-tabs v-model="tab" class="bg-indigo-9 text-white">
    <q-item clickable to="/home" class="q-mx-md q-mt-sm">
      <q-toolbar-title class="no-padding no-border text-h6">
        <q-avatar square class="ico">
          <img src="../../assets/ico_for_home/photo1706809821.jpeg" />
        </q-avatar>
      </q-toolbar-title>
    </q-item>
    <q-space />
    <q-tabs v-model="tab" class="bg-indigo-9 text-white">
      <q-tab
        no-caps
        v-for="item in tabItems"
        :key="item.name"
        :name="item.name"
        :label="item.label"
        :class="{ 'q-tab-active': tab === item.name }"
      />
    </q-tabs>

    <q-space />
    <q-btn-dropdown flat color="white" dropdown-icon="settings" />
  </q-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";
const tab = ref("");
const tabItems = [
  { name: "inicio", label: "Inicio" },
  { name: "rooms", label: "Agendar Sala" },
  { name: "certifications", label: "Certificações" },
  { name: "sig", label: "Documentação SIG" },
  { name: "ramais", label: "Ramais" },
  { name: "rh", label: "RH Divulga" },
  { name: "cardup", label: "RH Divulga" },
];
</script>
<style scoped>
.ico {
  width: auto;
}
.q-tab-active {
  background-color: white !important;
  color: rgb(47, 47, 145) !important;
  border-radius: 10px;
}
</style>
