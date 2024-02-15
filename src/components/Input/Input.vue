<template>
  <div class="q-px-md" v-for="(item, index) in props.objectInput" :key="index">
    <q-input
      rounded
      white
      standout="bg-grey-4 text"
      v-model="inputValues[index]"
      :label="(item as string)"
    >
      <template v-slot:append>
        <q-icon
          v-show="item == 'Sua senha'"
          color="grey"
          class="cursor-pointer"
          @click="isPwdvisible = !isPwdvisible"
          :name="isPwdvisible ? 'visibility_off' : 'visibility'"
        />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
const isPwdvisible = ref(true);

const props = defineProps({
  objectInput: {
    type: Array,
    default: [],
  },
});

const inputValues = ref(Array(props.objectInput.length).fill(""));
</script>
