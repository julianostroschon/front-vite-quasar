<template>
  <h1>{{$t('about')}}</h1>
  <HelloWorld :msg="name" />
  <HeaderNav />
</template>
<script setup lang="ts">
defineProps<{ name: string }>()

</script>