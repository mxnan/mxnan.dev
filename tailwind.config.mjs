/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["var(--font-body)"],
      title: ["var(--font-title)"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
