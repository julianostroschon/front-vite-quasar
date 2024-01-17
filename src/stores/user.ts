import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import { type GitHubUser, getGithubProfile } from "../services/external";

export const useUsers = defineStore("users", {
  state: () => ({
    userData: {},
    // ...
  }),

  actions: {
    async getGithubProfile(username: string): Promise<void> {
      try {
        this.userData = await getGithubProfile(username);
        console.log(`Welcome back ${this.userData.name}!`);
      } catch (error) {
        console.log(error);
        // return error
      }
    },
  },
});

export const useUserStore = defineStore("user", async () => {
  /**
   * Current name of the user.
   */
  const username = ref("");
  const age = ref();
  const profile = async (
    username: string = "julianostroschon"
  ): Promise<GitHubUser> => await getGithubProfile(username);

  /**
   * `setUsername` is a function that takes a string and returns nothing
   */
  function setUsername(value: string) {
    username.value = value;
  }

  /**
   * `incrementAge` is a function that takes no arguments and returns nothing
   */
  // function incrementAge() {
  //   age.value += 1;
  // }

  // async function getGithub(name: string): Promise<GitHubUser> {
  //   return await getGithubProfile(name);
  // }

  return {
    // incrementAge,
    // getGithub,
    username,
    profile,
    age,
  };
});
