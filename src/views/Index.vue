<template>
  <div class="title row items-center justify-center q-pa-md">
    <q-card class="bg-primary row-5">{{ $t("about") }}</q-card>
    <form>
      <q-input v-model="name" type="text" filled class="bg-grey" />
      <q-btn type="submit" @click.prevent="submit">Enviar</q-btn>
    </form>
    {{ user }}
    <!-- {{ newUser }} -->
  </div>
  <FabButton />
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import type { GitHubUser } from "../services/external";

const name = ref("julianostroschon");

const user: Ref<GitHubUser> = ref({});
// const user = useUserStore();

async function submit() {
  const users = useUsers();
  // console.log({ users })
  users.getGithubProfile(name.value);
  user.value = users.userData;
}

const newUser = computed(() => {
  console.log({ user, vl: useUserStore().$state });
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
