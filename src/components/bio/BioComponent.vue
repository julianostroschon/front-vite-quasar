<script lang="ts">
import config from "../../info";
import { LANGUAGES } from "./lib";

export default defineComponent({
  name: "BioComponent",
  props: {
    showLanguages: {
      type: Boolean,
      default: (): boolean => false,
    },
  },
  setup() {
    const { name, position, languages } = config;

    function parseLanguages() {
      return languages.reduce((acc, lang) => {
        const language = lang.toLowerCase() as keyof typeof LANGUAGES;
        acc[language] = LANGUAGES[language];
        return acc;
      }, {} as Record<string, any>);
    }
    return {
      parseLanguages,
      languages,
      position,
      name,
    };
  },
});
</script>

<template>
  <div class="container">
    <div class="text column">
      <span class="text-h3 text-weight-medium">{{ name }}</span>
      <span class="text-subtitle1">{{ position }}</span>
    </div>
    <div v-if="showLanguages" class="column">
      <span class="text-subtitle2">Languages</span>
      <ol class="q-ma-none">
        <li v-for="{ name } in parseLanguages()">
          {{ name }}
        </li>
      </ol>
    </div>
  </div>
</template>
