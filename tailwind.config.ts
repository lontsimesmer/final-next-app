import type { Config } from "tailwindcss";

// module.exports = {
//   theme: {
//     backgroundColor: (theme: any) => ({
//       ...theme("colors"),
//       primary: "#6a5acd",
//       secondary: "#ffed4a",
//       danger: "#e3342f",
//     }),
//   },
// };

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
