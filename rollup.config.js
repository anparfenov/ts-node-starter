import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/node.ts',
        output: [
            {
                file: 'dist/bundle.node.js',
                format: 'es',
            }
        ],
        plugins: [typescript({ tsconfig: './tsconfig.json' }), nodeResolve(), commonjs()]
    },
];
