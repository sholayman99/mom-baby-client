/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme:   {
          "primary":"#EF7B84",
          "secondary":"#68B5D2",
          "accent":"#717173",
          "info":"#4A4A4B",
          "neutral":"#4A4A4A",
          "success":"#8DCFAB",
          "error":"#dc2626",
          "warning":"#facc15",
          "base-100":"#FFFFFF"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}