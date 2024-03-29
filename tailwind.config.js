module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        translucent: 'rgba(0, 0, 0, .5)',
        translucenter: 'rgba(0, 0, 0, .9)'
      }
    }
  }
}
