<template>
  <div class="main-container">
    <div class="paralax_home">
      <Paralax class="paralax" />
    </div>

    <CustomSeparator class="separator" texto="SISTEMAS" />
    <div class="row">
      <div v-for="(card, index) in cards" :key="index" class="col-4 q-pa-md">
        <q-item clickable v-ripple>
          <q-avatar size="6.5rem">
            <img class="rounded" :src="card.avatar" />
          </q-avatar>

          <q-card-actions vertical class="justify-around q-px-md">
            <q-item-label class="text-grey-8 text-h6 text-weight-bolder">
              {{ card.name }}
            </q-item-label>
            <q-item-label class="text-grey text-weight-bolder">
              {{ card.description }}
            </q-item-label>
          </q-card-actions>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
  {
    name: "Junior",
    description: "Junior",
    avatar: "https://cdn.quasar.dev/img/avatar.png",
  },
];
</script>

<style scoped>
.separator {
  width: 100%;
  z-index: 1;
  top: -10px;
  position: relative;
}
.row {
  justify-content: center;
}

.rounded {
  border-radius: 10px;
}
.paralax_home {
  padding: 0;
  border: 0;
  margin-bottom: -120px;
}
</style>
