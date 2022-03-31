module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}"
  ],
  theme: {
    extend: {
      colors: {
        'yoru': {
          100: '#EAF3F3',
          200: '#ACD0D1',
          300: '#6CADB0',
          400: '#323737'
        }
      },
      fontFamily: {
        'nunitosans': '"Nunito Sans"',
        'lora': '"Lora"'
      }
    },
  },
  plugins: [],
}
