import { createClient, defaultPlugins } from 'villus';
import { getEnvironmentVariable } from '../helpers';

// Creates a villus client instance
const url = getEnvironmentVariable('VITE_GQP_ENDPOINT');
export const villus = createClient({
  use: [...defaultPlugins()],
  url
});