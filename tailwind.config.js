/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        primary_desaturated: "hsl(180, 29%, 50%)",
        primary: "hsl(180, 52%, 96%)",
        secondary_filter: "hsl(180, 31%, 95%)",
        third_Dark: "hsl(180, 8%, 52%)",
        very_dark_cyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
