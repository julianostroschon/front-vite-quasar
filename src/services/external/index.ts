import { snakeToCamel } from "../../support/utils";
import type { GitHubUser, GitHubUserRaw } from "./contracts";

export async function getGithubProfile(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data: GitHubUserRaw = await response.json();
  return snakeToCamel(data) as GitHubUser;
}
