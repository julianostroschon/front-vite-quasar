<template>
  <q-layout view="hHh Lpr lff"  style="height: 300px" class="shadow-2 rounded-borders">
    <header-bar @drawer="drawer = !drawer"/>
    <drawer-bar :drawer="drawer" :list-items="menuList" />
    <q-page-container>
      <slot name="content" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

const drawer = ref(true)

const menuList = [
  {
    icon: 'folder',
    label: 'Notebooks',
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
    label: 'Tags',
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