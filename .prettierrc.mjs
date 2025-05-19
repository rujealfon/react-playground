export default {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/assets/styles/index.css',
  tailwindFunctions: ['clsx', 'tw'],
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
};
