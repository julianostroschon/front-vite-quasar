<template>
  <q-img class="avatar" :src="exposed" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Avatar",
  props: {
    avatar: {
      type: String,
      default: () => "https://cdn.quasar.dev/img/boy-avatar.png",
    },
  },
  computed: {
    exposed() {
      return this.avatar;
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.avatar {
  border: 3px solid #000;
  border-radius: 50%;
  width: 100px;
}
.avatar:hover {
  filter: drop-shadow(0 0 2em #646cffff);
}
</style>
