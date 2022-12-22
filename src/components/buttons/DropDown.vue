<template>
  <div class="dropdown">
    <div :class="dropClass" class="menu">
      <button v-for="btn in menu" class="menu-button">
        <span class="menu-button-text">{{ $t(btn.name) }}</span>
        <i class="material-icons">{{ btn.icon }}</i>
      </button>
    </div>
    <button @click="handleClick">
      <i class="material-icons">{{ menuIcon }}</i>
    </button>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false);
const dropClass = computed(() => (isOpen.value ? "open" : ""));
const menuIcon = computed(() => (isOpen.value ? "close" : "expand_more"));

function toggleDropDown() {
  isOpen.value = !isOpen.value;
}
function handleClick() {
  toggleDropDown();
}

const closeDropdown = () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
};

const menu = [
  {
    name: "text.profile",
    icon: "account_circle",
  },
  {
    name: "text.settings",
    icon: "settings",
  },
  // {
  //   name: "Logout",
  //   icon: "logout",
  // },
];
</script>
<style scoped>
.dropdown-button-1 {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}

.dropdown {
  position: relative;
  width: 200px;
}

.dropdown > button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
}

.dropdown > button::after {
  position: absolute;
  width: 100%;
  background: #088775;
  transform-origin: 0% 0%;
  transform: scaleX(0);
  transition: 0.5s;
}

.menu.open ~ button::after,
.dropdown > button:hover::after {
  transform: scale(1);
}

.menu {
  position: absolute;
  top: 56px;
  overflow: hidden;
  width: 100%;
  background: #212025;
  display: grid;
  visibility: hidden;
  opacity: 0;
  translate: 0 20px;
  transition: 0.3s;
}

.menu.open {
  visibility: visible;
  opacity: 1;
  translate: 0 0;
}

.menu > button {
  font-size: 15px;
}

.menu > button .material-symbols-outlined {
  font-size: 20px;
}

.menu.open ~ button .material-symbols-outlined {
  scale: 0.85;
}

.menu > button:hover {
  background: #2c2b31;
}
</style>
