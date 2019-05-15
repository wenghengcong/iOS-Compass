import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/

// 参考：https://github.com/umijs/umi-plugin-gh-pages
// gh-pages配置：https://github.com/tschaub/gh-pages#options
const config: IConfig = {
  minimizer: 'terserjs',
  // chainWebpack(config) {
  //   config.optimization.splitChunks({
  //     cacheGroups: {
  //       styles: {
  //         name: 'styles',
  //         test: /\.(css|less)$/,
  //         chunks: 'async',
  //         minChunks: 1,
  //         minSize: 0,
  //       }
  //     },
  //   });
  // },
  treeShaking: true,
  base: '/iOS-Compass/',
  publicPath: '/iOS-Compass/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: 'compass',
      dynamicImport: {
        webpackChunkName: true,
      },
      chunks: ['vendors', 'umi'],
    }],
    'umi-plugin-gh-pages',
  ],
}

export default config;
