import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'nifty-ui/nifty-ui.css': resolve(__dirname, '../packages/nifty-ui/nifty-ui.css'),
      'nifty-ui': resolve(__dirname, '../packages/nifty-ui/src'),
    },
  },
});
