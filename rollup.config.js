import 'dotenv/config';

import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import * as fs from 'fs';
import * as path from 'path';

const USER_SCRIPT_NAME = process.env['USER_SCRIPT_NAME'];
const USER_SCRIPT_ROOT = path.resolve('src/userScripts', USER_SCRIPT_NAME);

export default {
    input: path.resolve(USER_SCRIPT_ROOT, 'main.mts'),
    output: {
        file: `./dist/${USER_SCRIPT_NAME}.js`,
        format: 'esm',
        banner: fs.readFileSync(path.resolve(USER_SCRIPT_ROOT, 'header.mts'), 'utf-8'),
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
