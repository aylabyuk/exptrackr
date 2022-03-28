module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobs': '320px', // mobile small
      'mobm': '375px', // mobile medium
      'mobl': '425px', // mobile large
      'tab': '768px', // tablet
      'lap': '1024px', // laptop
      'lapl': '1440px', // laptop large
      '4k': '2560px', // 4k
    },
    extend: {},
  },
  plugins: [],
}
