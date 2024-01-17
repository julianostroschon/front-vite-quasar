import { snakeToCamel } from "../../support/utils";

export async function getGithubProfile(username: string): Promise<GitHubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data: GitHubUserRaw = await response.json();
  return snakeToCamel(data) as GitHubUser;
}

export type GitHubUserRaw = {
  twitter_username: string | null;
  received_events_url: string;
  subscriptions_url: string;
  organizations_url: string;
  hireable: boolean | null;
  followers_url: string;
  following_url: string;
  public_repos: number;
  public_gists: number;
  email: string | null;
  site_admin: boolean;
  starred_url: string;
  gravatar_id: string;
  created_at: string;
  updated_at: string;
  events_url: string;
  avatar_url: string;
  followers: number;
  following: number;
  repos_url: string;
  gists_url: string;
  location: string;
  html_url: string;
  company: string;
  node_id: string;
  login: string;
  blog: string;
  name: string;
  type: string;
  bio: string;
  url: string;
  id: number;
};

export type GitHubUser = {
  twitterUsername: string | null;
  receivedEventsUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  hireable: boolean | null;
  email: string | null;
  followersUrl: string;
  followingUrl: string;
  publicRepos: number;
  publicGists: number;
  starredUrl: string;
  siteAdmin: boolean;
  gravatarId: string;
  avatarUrl: string;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string;
  eventsUrl: string;
  reposUrl: string;
  gistsUrl: string;
  location: string;
  htmlUrl: string;
  company: string;
  nodeId: string;
  login: string;
  type: string;
  name: string;
  blog: string;
  bio: string;
  url: string;
  id: number;
};
