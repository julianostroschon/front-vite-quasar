<template>
  <HeaderBar />
  <q-splitter v-model="splitterModel" class="full-height" unit="%">
    <template v-slot:before>
      <NotebooksAndTagsMenu :list-items="menuList" class="bg-grey-5 fit" />
    </template>

    <template v-slot:after>
      <q-splitter v-model="insideModel" unit="%">
        <template v-slot:before> </template>

        <template v-slot:after>
          <slot />
        </template>
      </q-splitter>
    </template>
  </q-splitter>
</template>

<script setup lang="ts">
const splitterModel = ref(15);

const insideModel = ref(25);

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
<style scoped>
.height-layout {
  height: 100vh;
}
</style>
