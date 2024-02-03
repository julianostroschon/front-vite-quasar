<template>
  <div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      height="300px"
      class="rounded-borders bg-blue"
    >
      <q-carousel-slide name="style">
        <q-card-section class="row col-12 justify-around">
          <q-item class="col- q-my-md items-center" clickable>
            <Card />
          </q-item>
        </q-card-section>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control position="bottom-left">
          <div class="btns_group">
            <q-badge class="q-badge" rounded color="white" />
            <q-badge class="q-badge" rounded color="white" />
            <q-badge class="q-badge" rounded color="white" />
            <q-badge class="q-badge" rounded color="white" />

            <q-badge class="q-badge" rounded color="white" />

            <q-badge class="q-badge" rounded color="white" />

            <q-badge class="q-badge" rounded color="white" />

            <q-badge class="q-badge" rounded color="white" />

            <q-badge class="q-badge" rounded color="white" />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../Card/Card.vue";
const slide = ref("style");
const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.";
</script>
<style scoped>
.btns_group {
  border-radius: 10px;
  background-color: rgb(180, 180, 180);
}
.q-badge {
  margin-right: 5px;
}
</style>
