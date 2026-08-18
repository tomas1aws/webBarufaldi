import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f3f1eb",
        ink: "#111a22",
        navy: "#15232e",
        accent: "#9d7250",
      },
    },
  },
  plugins: [],
};

export default config;
