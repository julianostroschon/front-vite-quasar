<template>
  <q-layout view="hHh Lpr lff"  style="height: 300px" class="shadow-2 rounded-borders">
    <header-bar @open-menu="menu = !menu"/>
    <drawer-bar :drawer="menu" :list-items="menuList" />
    <q-page-container>
      <slot name="content" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

const menu = ref(true)

const menuList = [
  {
    icon: 'folder',
    label: 'caderno.title',
    separator: true,
    subItems: [
      {
        name: 'notebook1'
      },
      {
        name: 'notebook2'
      }
    ]
  },
  {
    icon: 'bookmarks',
    label: 'tags',
    separator: false,
    subItems: [
      {
        name: 'tag1'
      },
      {
        name: 'tag2'
      }
    ]
  }
]

</script>