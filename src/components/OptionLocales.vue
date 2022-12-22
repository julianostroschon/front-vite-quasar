<template>
  <option
    v-for="locale in $i18n.availableLocales"
    :key="`locale-${locale}`"
    :value="locale"
  >
    {{ locale }}
  </option>
</template>
