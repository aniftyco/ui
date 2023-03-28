import { defineConfig } from 'nifty-ui';
import colors from 'tailwindcss/colors';

export default defineConfig({
  content: ['./pages/**/*.{tsx,mdx}', './components/**/*.tsx', './nextra.config.jsx'],
  theme: {
    text: colors.slate[500],
    background: colors.slate[900],
    primary: colors.emerald[600],
    secondary: colors.rose[500],
    accent: colors.violet[500],
    neutral: colors.slate[500],
    info: colors.blue[500],
    success: colors.teal[500],
    warning: colors.amber[500],
    danger: colors.red[500],
  },
});