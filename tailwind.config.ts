import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Playwrite: ["Playwrite NG Modern"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "#E5E7EB",
        baseColor: "#10B981",
        CustomeGreen: "#34D399",
        CustomeBlue: "#3B82F6",
        defaultbackground: "#009688~",
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
      // screens: {
      //   xss: "100px",
      //   xs: "475px ", // Extra small devices
      //   sm: "640px", // Small devices
      //   md: "1022px", // Medium devices
      //   lg: "1400px", // Large devices
      //   xl: "1560px", // Extra large devices
      // },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
