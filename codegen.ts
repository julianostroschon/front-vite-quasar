import type { CodegenConfig } from "@graphql-codegen/cli";

const schema =
  process.env.VITE_APP_ENDPOINT || "https://scheduller.onrender.com/graphql";
// console.log({ schema, env: process.env })

const config: CodegenConfig = {
  overwrite: true,
  schema,
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      config: {
        useTypeImports: true,
        dedupeFragments: true,
        withCompositionFunctions: true,
        addDocBlocks: true,
        skipTypename: true,
      },
      plugins: [{ add: { content: "// @ts-nocheck" } }],
    },
    "src/graphql/generated/schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
