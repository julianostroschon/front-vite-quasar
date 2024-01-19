<template>
  <q-card class="title column items-center justify-center q-pa-md bg-primary">
    <span class="text-h4 text-weight-bold" v-if="title">{{ title }}</span>
    <Avatar :avatar="user.avatarUrl" />
    <form>
      <q-input v-model="name" type="text" filled class="bg-grey" />
      <q-btn type="submit" @click.prevent="submit">Enviar</q-btn>
    </form>
  </q-card>
  <FabButton />
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import type { GitHubUser } from "../services/external";
import { profileStore } from "../stores";

const name = ref("julianostroschon");

const user: Ref<GitHubUser> = ref(profileStore);
const title: Ref<string> = ref("");
// const user = useUserStore();

// const users = profileStore;
onBeforeMount(() => {
  console.log({ isSame: user.value.isSameName(name.value) });
  if (!user.value.isSameName(name.value)) {
    // console.log({ users })
    // user.getGithubProfile(name.value);
    submit();
  }
});

async function submit() {
  await user.value.getGithubProfile(name.value);
  title.value = user.value.name;
}

const newUser = computed(() => {
  return user;
});
</script>

<style scoped>
.title {
  will-change: filter;
}
</style>
