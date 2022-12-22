<script setup lang="ts">
const t = useI18n();

defineExpose({
  toggleLocale: () => {
    const locales = t.availableLocales;
    const fromLocale = t.locale.value;
    t.locale.value =
      locales[(locales.indexOf(t.locale.value) + 1) % locales.length];
    console.warn(fromLocale, " -> ", t.locale.value);
  },
});
</script>
<template>
  <i class="material-icons">translate</i>
</template>
