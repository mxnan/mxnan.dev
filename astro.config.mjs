import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "one-dark-pro",
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
