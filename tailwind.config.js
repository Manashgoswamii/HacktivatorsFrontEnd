// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#5E54E7", // name it as you like
      },
      boxShadow: {
        'custom': '27px 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require("daisyui")],
}
