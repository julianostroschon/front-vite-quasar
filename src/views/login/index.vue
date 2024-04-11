<template>
  <div class="column q-gutter-md q-pa-md">
    <q-input v-model="form.email" type="text" filled class="bg-grey" />
    <q-input v-model="form.password" type="text" filled class="bg-grey" />
  </div>
  <q-btn @click="submit">{{ $t("action.submit.index") }}</q-btn>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const form = reactive({
      email: "juliano@dev.com",
      password: "hashed_password",
    });
    // INSERT INTO "users" ("email", "administrator", "email", "password", "cpf") VALUES ('Juliano', true, 'juliano@dev.com', 'hashed_password', '12345678901');
    function submit() {
      console.log(form);
    }
    return {
      form,

      submit,
    };
  },
});
</script>
