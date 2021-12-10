import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: './dist/js/index.js',
      sourcemap: false,
    },
    {
      format: 'esm',
      file: './dist/esm/index.js',
      sourcemap: false,
    },
  ],
  watch: {
    skipWrite: false,
    clearScreen: false,
    include: 'src/**/*',
  },
  plugins: [peerDepsExternal(), resolve(), vue(), commonjs(), typescript()],
};
