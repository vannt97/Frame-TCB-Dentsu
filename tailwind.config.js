/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "black-color": "rgb(17, 17, 17)",
        "black-color-2": "#222221",
        "yellow-color": "rgba(223, 181, 94, 1)",
        "grey-color": "rgba(17, 17, 17, 0.5)",
        "grey-2-color": "#D9D9D9",
        "grey-3-color": "#11111180",
        "grey-4-color": "#FFFFFFCC",
      },
    },
  },
  plugins: [],
};
