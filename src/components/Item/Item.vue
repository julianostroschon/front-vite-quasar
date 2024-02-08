<template>
  <div class="row justify-center">
    <div v-for="(item, index) in items" :key="index" class="col-3 q-pa-md">
      <q-item clickable v-ripple>
        <q-item-section>
          <div>
            <q-icon
              class="custom-icon indigo-8-bg"
              color="indigo-8"
              size="5em"
              :name="item.icon"
            />
          </div>
        </q-item-section>
        <div class="label text-start">
          <q-item>
            <q-item-section>
              <q-item-label class="text-indigo-8 text-h6 text-weight-bolder">
                {{ item.name }}
              </q-item-label>

              <q-item-label class="text-indigo text-h6">
                {{ item.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { items } from "./lib";
</script>

<style scoped>
.custom-icon {
  border-radius: 50%;
  padding: 0.3em;
}

.indigo-8-bg {
  border: 8px solid rgba(63, 81, 181);
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.3);
}
.label {
  top: 25px;
  right: 10px;
  position: relative;
}
</style>
