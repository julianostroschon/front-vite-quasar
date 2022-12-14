<template>
  <q-layout
    view="hHh Lpr lff"
    style="height: 300px"
    class="shadow-2 rounded-borders"
  >
    <HeaderBar @open-menu="menu = !menu" />
    <SideBar :drawer="menu" :list-items="menuList" />
    <q-page-container>
      <slot name="content" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const menu = ref(true);

const menuList = [
  {
    icon: "book",
    label: "caderno.title",
    addButton: true,
    subItems: [
      {
        name: "notebook1",
      },
      {
        name: "notebook2",
      },
    ],
  },
  {
    icon: "sell",
    label: "tags",
    subItems: [
      {
        name: "tag1",
      },
      {
        name: "tag2",
      },
    ],
  },
];
</script>
