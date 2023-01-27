import { Config as TailwindConfig } from 'tailwindcss';
import radix from './plugins/radix';

export type Config = {
  content: string[];
  prefix?: string;
};
export type Tailwind = (config: Config) => TailwindConfig;

export const createConfig: Tailwind = (config: Config = {} as Config) => {
  const twConfig: TailwindConfig = {
    content: [...config.content, require('path').resolve(__dirname, 'components/**/*.js')],
    plugins: [radix({ variantPrefix: config.prefix })],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'blue',
          },
        },
      },
    },
  };

  console.log(twConfig);

  return twConfig;
};
