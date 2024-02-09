import { defineStore } from "pinia";

const id = "users";
const useUsers = defineStore(id, {
  state: () => {
    return {
      name: "",
    };
  },
  getters: {},

  actions: {},
});

export const profileStore = useUsers();
