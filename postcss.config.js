const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    'public/**/*.html',
    'src/**/*.tsx'
  ],
  whitelist: [
    "bg-red-700"
  ],
  // This is the function used to extract class names from your templates
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano({ preset: 'default' })] : []
  ]
}