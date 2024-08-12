import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: 'packages/components/index.ts',
    output: {
      dir: 'dist/components',
      format: 'esm',
    },
    external: ['vue'],
    plugins: [
      del({ targets: 'dist/components' }),
      vue(),
      typescript({
        tsconfig: 'tsconfig.app.json',
      }),
      terser(),
      copy({
        targets: [{ src: 'packages/components/package.json', dest: 'dist/components' }],
      }),
    ],
  },
  //   {
  //     input: 'packages/components/index.ts',
  //     output: {
  //       file: 'dist/components/index.d.ts',
  //       format: 'es',
  //     },
  //     plugins: [dts()],
  //   },
  //   {
  //     // 打包样式的任务
  //     input: 'packages/theme-chalk/src/index.scss',
  //     output: {
  //       file: 'dist/theme-chalk/index.css',
  //       format: 'esm',
  //     },
  //     plugins: [
  //       del({
  //         targets: 'dist/theme-chalk',
  //       }),
  //       postcss({
  //         extract: true, // 单独生成一个 css 文件
  //         minimize: true, // 压缩
  //       }),
  //       copy({
  //         targets: [
  //           {
  //             src: 'packages/theme-chalk/package.json',
  //             dest: 'dist/theme-chalk',
  //           },
  //           {
  //             src: 'packages/theme-chalk/src/fonts/*',
  //             dest: 'dist/theme-chalk/fonts',
  //           },
  //         ],
  //       }),
  //     ],
  //   },
];
