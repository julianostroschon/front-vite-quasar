<template>
  <q-form class="q-pa-md bg-blue-grey-2">
    <q-input
      v-model="title"
      :label="$t('caderno.form.title')"
      stack-label
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || $t('caderno.form.warning')]"
    />
  </q-form>
</template>

<script setup lang="ts">
const title = ref("");
</script>
