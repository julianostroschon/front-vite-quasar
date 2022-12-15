<template>
  <q-card class="card-size absolute-center" flat bordered>
    <q-card-section>
      <div class="text-h3">{{ $t("login.title") }}</div>
    </q-card-section>
    <q-card-section>
      <LoginForm />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import LoginForm from "./LoginForm.vue";
</script>

<style scoped>
.card-size {
  width: 30vw;
  height: auto;
}
</style>
