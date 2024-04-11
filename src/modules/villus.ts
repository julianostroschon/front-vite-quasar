import { createClient, defaultPlugins } from "villus";
import { getEnvironmentVariable } from "../helpers";

function authPlugin({ opContext }: { opContext: FetchOptions }) {
  opContext.headers.Authorization =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwiZW1haWwiOiJtYXJpYUBqb2FvLmNvbWFhYSIsImlhdCI6MTcxMjE3MDc1NH0.DbvMRLf4dBZZTm9RHuDG1k7Cr0J0thMiOIYKzwStTo0";
}

interface FetchOptions extends RequestInit {
  url?: string;
  headers: NonNullable<Record<string, string>>;
}

// Creates a villus client instance
export const url = getEnvironmentVariable("VITE_APP_ENDPOINT");
export const villus = createClient({
  use: [authPlugin, ...defaultPlugins()],
  url,
});
