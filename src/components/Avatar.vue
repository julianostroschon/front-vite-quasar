<template>
  <q-avatar class="avatar-profile">
    <img src="/profile.png" class="q-pa-sm avatar" />
  </q-avatar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Avatar",
  setup() {
    return {
      authorName,
    };
  },
});
</script>

<style scoped>
.avatar-profile {
  border-radius: 30%;
  height: 200px;
  width: 200px;
}
.avatar {
  border: 3px solid rgba(211, 211, 211, 0.239);
  border-radius: 10px;
}

.avatar:hover {
  filter: drop-shadow(0 0 5px rgba(100, 108, 255, 0.581));
}
</style>
