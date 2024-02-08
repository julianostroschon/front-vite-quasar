<template>
  <q-carousel
    v-model="slide"
    swipeable
    animated
    padding
    infinite
    height="400px"
    class="carousel rounded-borders bg-indigo-8"
  >
    <q-carousel-slide name="style" class="slide" style="height: 100%">
      <q-img
        class="img-in-carousel"
        src="../assets/background_for_home/photo1706890077.jpeg"
        height="100%"
      />
    </q-carousel-slide>
    <template v-slot:control>
      <q-carousel-control class="btns-carousel" position="bottom-left">
        <div class="btn-container" v-for="(item, index) in items" :key="index">
          <q-btn
            class="btn"
            round
            padding="none"
            color="white"
            :size="activeIndex === index ? '6px' : ''"
            @click="changeSlide(index)"
          >
            <template v-slot:default>
              <q-icon name="ball" />
            </template>
          </q-btn>
        </div>
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from "vue";

const slide = ref("style");
const items = [1, 2, 3, 4, 5];

const activeIndex = ref(0);
const changeSlide = (index: number) => {
  activeIndex.value = index;
};
</script>

<style scoped>
.carousel {
  overflow: hidden;
  top: -27px;
}
.btns-carousel {
  border-radius: 10px;
  background-color: rgba(190, 191, 196, 0.5);
}
.btn-container {
  display: inline-block;
  margin: 0 5px; /* Ajuste a margem conforme necessário para o espaçamento desejado */
  cursor: pointer;
  width: auto;
}
.btn {
  font-size: 5px;
}
.slide {
  padding: 0;
}
</style>
