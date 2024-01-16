<template>
  <div class="title row items-center justify-center q-pa-md">
    <q-card class="bg-primary row-5">{{ $t("about") }}</q-card>
    <q-input v-model="name" type="text" filled class="bg-grey" />
    {{ user }}
    {{ newUser }}
  </div>
  <FabButton />
</template>
<script setup lang="ts">
const name = ref("julianostroschon");

const user = useUserStore();

const newUser = computed(() => {
  console.log({ user, vl: user });
  return user;
});
</script>

<style scoped>
.title {
  will-change: filter;
}
.title:hover {
  filter: drop-shadow(0 0 2em #646cffff);
}
</style>
