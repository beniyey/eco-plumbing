import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          text: "#222",
          button: "",
          sea: "#0b5d6a"
        },
        secondary: {
          text: "#f4bd14",
          button: ""
        },
        background: {
          primary:{
            light:"#f6f5f8"
          },
          button: {
            primary: "",
            secondary: ""
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
