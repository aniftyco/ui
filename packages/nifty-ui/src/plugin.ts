import { PluginAPI as API } from 'tailwindcss/types/config';

export type Plugin = (api: API) => void;

export const plugin: Plugin = (api) => {
  console.log('nifty-ui initiated');
};
