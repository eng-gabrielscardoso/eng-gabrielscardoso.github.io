import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsConfigPath from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'
const autoprefixer = require('autoprefixer')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsConfigPath(), checker({ typescript: true })],
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        tailwindcss
      ]
    }
  },
});
