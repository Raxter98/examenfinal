/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
            "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      fontFamily:{
        nabla: 'Nabla, cursive'
      }

    },
  },
  plugins: [require('flowbite/plugin')],
}
