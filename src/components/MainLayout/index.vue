<template>
  <HeaderBar />
  <div class="height-layout">
    <q-splitter v-model="splitterModel" style="height: 100%" unit="%">
      <template v-slot:before>
        <q-splitter v-model="insideModel" style="height: 100%" unit="%">
          <template v-slot:before>
            <div class="bg-grey-5 fit">
              <NotebooksAndTagsMenu :list-items="menuList" />
            </div>
          </template>

          <template v-slot:after> </template>
        </q-splitter>
      </template>

      <template v-slot:after>
        <slot />
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">
const splitterModel = ref(35);

const insideModel = ref(40);

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
