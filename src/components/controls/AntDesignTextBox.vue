<script setup lang="ts">
const value = ref();
const inputClass = computed(() => (value.value ? "has-value" : ""));
</script>

<template>
  <div className="ad-textbox">
    <input v-model="value" :class="inputClass" id="textbox" type="text" />
    <i class="material-icons">mail</i>
    <label htmlFor="textbox">Email Address</label>
    <div class="underline" />
    {{ value }}
  </div>
</template>

<style scoped>
.ad-textbox {
  position: relative;
}

.ad-textbox > .underline {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #0fa5a2;
  transform: scaleX(0);
  transition: 0.35s;
}

.ad-textbox > span,
.ad-textbox > label {
  position: absolute;
  pointer-events: none;
  translate: 0 -50%;
  color: rgba(255, 255, 255, 0.5);
  transition: 0.35s;
}

.ad-textbox > span {
  top: 50%;
  left: 0;
}

.ad-textbox > label {
  top: 50%;
  left: 34px;
  white-space: nowrap;
}

.ad-textbox > input {
  height: 60px;
  width: 220px;
  padding-left: 34px;
  background: transparent;
  border: 0;
  outline: none;
  border-bottom: 2px solid #2e2a33;
  color: rgba(255, 255, 255, 0.96);
  font-size: 16px;
}

.ad-textbox > :is(input:focus, input.has-value) ~ span {
  color: rgba(255, 255, 255, 0.96);
}

.ad-textbox > :is(input:focus, input.has-value) ~ label {
  color: #0fa5a2;
}

.ad-textbox > :is(input:focus, input.has-value) ~ label {
  translate: -42px -44px;
  scale: 0.875;
}

.ad-textbox > :is(input:focus, input.has-value) ~ .underline {
  transform: scaleX(1);
}
</style>
