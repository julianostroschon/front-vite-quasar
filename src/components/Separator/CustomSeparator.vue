<template>
  <div class="custom-separator">
    <div class="line"></div>
    <div class="text">
      <h5 class="custom-text">{{ texto }}</h5>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-separator {
  display: flex;
  border: 0;
  padding: 0;
}
.line {
  flex-grow: 1;
  border-bottom: 10px solid var(--separator-color, #367c1e);
  height: 20px;
}

.text {
  padding: 0 10%; /* Exemplo de ajuste responsivo */
  background-color: #3b9e1a;
  border-radius: 10px;
  color: white;
}
.custom-text {
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
}
</style>
