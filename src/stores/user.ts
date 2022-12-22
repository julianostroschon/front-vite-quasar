import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  /**
   * Current name of the user.
   */
  const username = ref("Juliano");
  const age = ref(29);

  /**
   * `incrementAge` is a function that takes no arguments and returns nothing
   */
  function incrementAge() {
    age.value += 1;
  }

  return {
    username,
    age,
    incrementAge,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
