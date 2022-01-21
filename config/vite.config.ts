import resolve from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'Plugin',
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    vue(),
    {
      ...typescript(),
      enforce: 'pre',
    },
  ],
});
