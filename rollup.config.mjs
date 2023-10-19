import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import repo from './package.json' assert { type: 'json' };

export default () =>
{
    const plugins = [
        esbuild({
            target: 'es2020',
        }),
        nodeResolve(),
        commonjs(),
    ];

    const {
        dependencies = {},
        peerDependencies = {},
    } = repo;

    const external = Object.keys(dependencies)
        .concat(Object.keys(peerDependencies));

    const basePath = process.cwd();
    const input = path.join(basePath, 'src/index.ts');

    return {
        plugins,
        external,
        input,
        output: [
            {
                dir: path.join(basePath, 'lib'),
                entryFileNames: '[name].js',
                format: 'cjs',
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: path.join(basePath, 'src'),
            },
            {
                dir: path.join(basePath, 'lib'),
                entryFileNames: '[name].mjs',
                format: 'esm',
                sourcemap: true,
                preserveModules: true,
                preserveModulesRoot: path.join(basePath, 'src'),
            },
        ],
    };
};
