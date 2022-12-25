<template>
  <div>
    <h2>Round</h2>
    <ToggleTheme />
  </div>
  <div>
    <h2>Square</h2>
    <span class="switch square">
      <input id="switch-square" type="checkbox" />
      <label for="switch-square"></label>
    </span>
  </div>
  <div>
    <h2>Disabled</h2>
    <span class="switch">
      <input disabled id="switch-disabled" type="checkbox" />
      <label for="switch-disabled"></label>
    </span>
  </div>
</template>
<style scoped>
.switch {
  display: inline-block;
}

.switch input {
  display: none;
}

.switch label {
  display: block;
  width: 60px;
  height: 30px;
  padding: 3px;
  border-radius: 15px;
  border: 2px solid #7e8382;
  cursor: pointer;
  transition: 0.3s;
}

.switch label::after {
  content: "";
  display: inherit;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background: #7e8382;
  transition: 0.3s;
}

.switch input:checked ~ label {
  border-color: #25c89c;
}

.switch input:checked ~ label::after {
  translate: 30px 0;
  background: #25c89c;
}

.switch input:disabled ~ label {
  opacity: 0.35;
  cursor: not-allowed;
}

.switch.square label,
.switch.square label::after {
  border-radius: 0;
}
</style>
