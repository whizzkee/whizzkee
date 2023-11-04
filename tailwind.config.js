/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        80: "80",
        90: "90",
        100: "100",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soft-white": "#f5f5f5",
        "softer-purple": "#b39ddb",
        "deep-purple": "#673ab7",
        "medium-purple": "#9575cd",
        "navy-blue": "#283593",
        "medium-blue": "#3f51b5",
        "light-blue": "#bbdefb",
        "dark-charcoal": "#262626",
      },
    },
  },
  plugins: [],
};
