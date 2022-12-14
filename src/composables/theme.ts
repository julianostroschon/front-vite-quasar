export const backgroundColor = computed(() =>
  isDark.value ? "bg-grey-7" : "bg-white"
);

export const textColor = computed(() =>
  isDark.value ? "text-white" : "text-black"
);

export const themeIcon = computed(() =>
  isDark.value ? "light_mode" : "dark_mode"
);

export const color = computed(() => (isDark.value ? "white" : "black"));
