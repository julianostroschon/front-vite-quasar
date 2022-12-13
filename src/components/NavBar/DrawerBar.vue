<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :width="250"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list>
        <item v-for="item in listItems" :key="item" :item="item" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
const drawer = ref(false)

const props = defineProps({
  listItems: {
    type: Array,
    default: () => []
  },
  drawer: {
    type: Boolean,
    default: () => false
  }
})

watchEffect(() => {
  drawer.value = props.drawer
});
</script>