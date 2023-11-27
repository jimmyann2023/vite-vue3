import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  const { APP_ENV, VITE_GLOB_API_URL } = env;
  console.log('env', APP_ENV, VITE_GLOB_API_URL);
  return {
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
      }),
      // antd 按需加载
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
      // vxe-table 按需加载
      createStyleImportPlugin({
        resolves: [VxeTableResolve()],
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '/src/styles/vxeTable.scss';", // 引入全局变量文件
        },
        less: {
          math: 'parens-division', // 指定传递给 less 预处理器的选项
        },
      },
    },
    // 在.env.production文件中配置 VITE_DROP_CONSOLE = true,
    // 打包时自动去除console和debugger
    esbuild: {
      drop: env?.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : [],
    },
  };
});
