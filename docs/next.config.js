const nextra = require('nextra');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/docs/components',
        destination: '/docs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './nextra.config.jsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})(config);
