/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0E0E0",
        accent: "#E9304E",
        accentComplementary: "#2AE9C8"
      },
    },
  },
  plugins: [],
};
