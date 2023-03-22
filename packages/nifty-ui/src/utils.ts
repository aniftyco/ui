import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Config as TailwindConfig } from 'tailwindcss';
import tinycolor from 'tinycolor2';
import { Theme } from './theme';

export const cx = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const generateColors = (color: string, amount = 30): Record<'light' | 'DEFAULT' | 'dark', string> => {
  const instance = tinycolor(color);

  return {
    light: instance.brighten(amount).toString(),
    DEFAULT: instance.toString(),
    dark: instance.darken(amount).toString(),
  };
};

export const transformThemeToColors = (theme: Theme) => {
  return Object.keys(theme).reduce((colors, color) => {
    colors[color] = Array.isArray(theme[color])
      ? {
          light: theme[color][0],
          DEFAULT: theme[color][1],
          dark: theme[color][2],
        }
      : generateColors(theme[color]);

    return colors;
  }, {} as TailwindConfig['theme']['colors']);
};
