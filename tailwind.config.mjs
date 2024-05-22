import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2BB4DE" /** style 1 */,
        secondary: "#53CA65" /** style 2 */,
        tertiary: "#ADB5BD" /** font color */,
        darkbg: "#25292D" /** background color */,
      },
      fontFamily: {
        title: ["Orbitron", ...defaultTheme.fontFamily.sans],
        body: ["RedditSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
