import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/main.mts',
    output: {
        file: './dist/bundle.js',
        format: 'esm',
        banner: ['//hello', '//world'].join('\n'),
    },
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.js', '.mjs', '.ts', '.mts'],
            presets: ['@babel/env', '@babel/preset-typescript'],
        }),
        typescript(), 
    ],
};
