<template>
  <FabButton />
  <DeleteButton />
  <SendButton />
  <PaymentButton @click="send" />
</template>

<script setup lang="ts">
function send() {
  runQuery(`query Ping { ping }`);
}
</script>
