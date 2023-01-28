const { createConfig } = require('nifty-ui');

module.exports = createConfig({
  darkMode: 'class',
  content: ['./pages/**/*.{tsx,mdx}', './components/**/*.tsx', './nextra.config.jsx'],
});
