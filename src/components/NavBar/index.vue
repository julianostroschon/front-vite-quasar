<template>
  <q-layout view="hHh Lpr lff"  style="height: 300px" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="250"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <item v-for="item in menuList" :item="item" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <slot name="content" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

const drawer = ref(false)

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