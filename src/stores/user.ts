import { defineStore } from "pinia";

import { type GitHubUser, getGithubProfile } from "../services/external";
const id = "users";
const useUsers = defineStore(id, {
  state: () => {
    const localData = localStorage.getItem(id);
    if (localData !== "undefined" && localData) {
      // console.log({ localData })
      const data = JSON.parse(localData);
      // console.log({ data })
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
    async getGithubProfile(username: string): Promise<GitHubUser> {
      const localData = localStorage.getItem(id);
      if (localData !== "undefined" && localData) return JSON.parse(localData);
      try {
        this.profile = (await getGithubProfile(username)) as GitHubUser;
        localStorage.setItem(id, JSON.stringify(this.profile));
        console.log(`Welcome back ${this.profile.name}!`);
        return this.profile;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get GitHub profile"); // TODO: handle error
      }
    },
  },
});

export const profileStore = useUsers();
