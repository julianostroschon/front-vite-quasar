import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";
import { GitHubUser, getGithubProfile } from "../services/external";

export const useUserStore = defineStore("user", async () => {
  /**
   * Current name of the user.
   */
  const username = ref("");
  const age = ref();
  // const profile = getGithubProfile('julianostroschon')

  /**
   * `setUsername` is a function that takes a string and returns nothing
   */
  function setUsername(value: string) {
    username.value = value;
  }

  /**
   * `incrementAge` is a function that takes no arguments and returns nothing
   */
  function incrementAge() {
    age.value += 1;
  }

  async function getGithub(
    name: string = "julianostroschon"
  ): Promise<GitHubUser> {
    return await getGithubProfile(name);
  }

  return {
    incrementAge,
    username,
    getGithub,
    age,
  };
});
