// postcss.config.js

// https://markus.oberlehner.net/blog/setting-up-tailwind-css-with-vue/

const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer
  ]
}
