import { defineStore } from "pinia";

const id = "users";
const useUsers = defineStore(id, {
  state: () => {
    const localData = localStorage.getItem(id);
    if (localData !== "undefined" && localData) {
      const data = JSON.parse(localData);
      return {
        name: data.login,
        profile: data,
        // ...
      };
    }
    return {
      name: "",
      profile: {},
      // ...
    };
  },
  getters: {
    isValid: (state): boolean => !!state.name,
  },

  actions: {
    isSameName(name: string): boolean {
      return this.name === name;
    },
  },
  persist: true,
});

export const profileStore = useUsers();
