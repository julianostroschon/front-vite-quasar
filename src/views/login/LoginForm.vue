<template>
  <q-form class="q-gutter-xl">
    <q-input
      v-model="name"
      filled
      :label="$t('login.labelInputName')"
      :hint="$t('login.hintName')"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || $t('login.warning')]"
    />
    <q-input
      v-model="password"
      filled
      :label="$t('login.labelInputPassword')"
      :hint="$t('login.hintPassword')"
      :type="isPwd ? 'password' : 'text'"
      :rules="[(val) => (val && val.length > 0) || $t('login.warning')]"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn
      :label="$t('login.submitButton')"
      type="submit"
      color="primary"
      size="1.5rem"
    />
  </q-form>
</template>

<script setup lang="ts">
const name = ref("");

const password = ref("");

const isPwd = ref(true);
</script>
