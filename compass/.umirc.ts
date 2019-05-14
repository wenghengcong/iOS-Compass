import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/

// 参考：https://github.com/umijs/umi-plugin-gh-pages
const config: IConfig =  {
  treeShaking: true,
  base: '/iOS-Compass/',
  publicPath: '/iOS-Compass/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title: 'compass',
    }],
    'umi-plugin-gh-pages',
  ],
}

export default config;
