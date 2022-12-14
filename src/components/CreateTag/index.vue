<template>
  <DynamicDialog :open="open" :title="$t('tag.create')">
    <q-select
      v-model="model"
      use-input
      use-chips
      outlined
      multiple
      new-value-mode="add"
      input-debounce="0"
      class="full-width"
      :options="options"
      @filter="filterFn"
    />
  </DynamicDialog>
</template>

<script setup lang="ts">
const open = ref(true);

const model = ref(null);

const stringOptions = ["a", "b", "c", "d", "e"];

const options = ref(stringOptions);

function filterFn(val: string, update: any) {
  update(() => {
    const needle = val.toLocaleLowerCase();
    options.value = stringOptions.filter(
      (v) => v.toLocaleLowerCase().indexOf(needle) > -1
    );
  });
}
</script>
