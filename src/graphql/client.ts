import {
  ApolloClient,
  createHttpLink,
  type HttpOptions,
  InMemoryCache,
  type ApolloLink,
} from "@apollo/client/core";

export const GRAPHQL_API_URL = import.meta.env.VITE_APP_ENDPOINT;

const createLink = (opts: HttpOptions = {}): ApolloLink => {
  return createHttpLink({ uri: GRAPHQL_API_URL, ...opts });
};

// eslint-disable-next-line no-return-assign
export const setAuthToken = (token?: string | null): void => {
  const options: HttpOptions = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (token != null) {
    // eslint-disable-next-line
    // @ts-ignore
    options.headers.Authorization = token;
  }

  apolloClient.setLink(createLink(options));
};

// Cache implementation
const cache = new InMemoryCache({});

// Create the apollo client
const apolloClient = new ApolloClient({
  cache,
  link: createLink(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

setAuthToken(null);

export { apolloClient };
