import { Config as TailwindConfig } from 'tailwindcss';
import defaultTheme, { Theme } from './theme';
import { transformThemeToColors } from './utils';

export type Config = {
  content: string[];
  theme?: Theme;
  plugins?: TailwindConfig['plugins'];
};

export type Tailwind = (config: Config) => TailwindConfig;

export const createConfig: Tailwind = (config: Config = {} as Config) => {
  const twConfig: TailwindConfig = {
    darkMode: 'class',
    content: [...config.content, require('path').resolve(__dirname, 'components/**/*.js')],
    plugins: [...(config.plugins ?? []), require('tailwindcss-animate')],
    theme: {
      extend: {
        colors: transformThemeToColors(config.theme ?? defaultTheme),
      },
    },
  };

  return twConfig;
};
