import colors from 'tailwindcss/colors';

export type Theme = Record<
  'text' | 'background' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'danger',
  string | [string, string, string]
>;

const theme: Readonly<Theme> = {
  text: colors.slate[100],
  background: colors.slate[800],
  primary: colors.purple[700],
  secondary: colors.rose[500],
  accent: colors.violet[500],
  neutral: colors.slate[500],
  info: colors.blue[500],
  success: colors.teal[500],
  warning: colors.amber[500],
  danger: colors.red[500],
};

export default theme;
