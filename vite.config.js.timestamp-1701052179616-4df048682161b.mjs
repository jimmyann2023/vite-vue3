// vite.config.js
import vue from "file:///C:/Users/Administrator/Desktop/micro-app/child_apps/vite-vue3/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@5.0.2_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Administrator/Desktop/micro-app/child_apps/vite-vue3/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.2_vue@3.3.8/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import UnoCSS from "file:///C:/Users/Administrator/Desktop/micro-app/child_apps/vite-vue3/node_modules/.pnpm/unocss@0.57.7_postcss@8.4.31_vite@5.0.2/node_modules/unocss/dist/vite.mjs";
import { defineConfig, loadEnv } from "file:///C:/Users/Administrator/Desktop/micro-app/child_apps/vite-vue3/node_modules/.pnpm/vite@5.0.2_@types+node@18.18.13_less@4.2.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import { createSvgIconsPlugin } from "file:///C:/Users/Administrator/Desktop/micro-app/child_apps/vite-vue3/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.2/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Administrator\\Desktop\\micro-app\\child_apps\\vite-vue3";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const { APP_ENV, VITE_GLOB_API_URL } = env;
  console.log("env", APP_ENV, VITE_GLOB_API_URL);
  return {
    // vite 配置
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
        customDomId: "__svg__icons__dom__"
      })
    ],
    resolve: {
      alias: [{ find: "@", replacement: resolve(__vite_injected_original_dirname, "src") }]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '/src/styles/index.scss';"
          // 引入全局变量文件
        },
        less: {
          math: "parens-division"
          // 指定传递给 less 预处理器的选项
        }
      }
    },
    // 在.env.production文件中配置 VITE_DROP_CONSOLE = true,
    // 打包时自动去除console和debugger
    esbuild: {
      drop: env?.VITE_DROP_CONSOLE === "true" ? ["console", "debugger"] : []
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbWljcm8tYXBwXFxcXGNoaWxkX2FwcHNcXFxcdml0ZS12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbWljcm8tYXBwXFxcXGNoaWxkX2FwcHNcXFxcdml0ZS12dWUzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvbWljcm8tYXBwL2NoaWxkX2FwcHMvdml0ZS12dWUzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xyXG4gIC8vIFx1NjgzOVx1NjM2RVx1NUY1M1x1NTI0RFx1NURFNVx1NEY1Q1x1NzZFRVx1NUY1NVx1NEUyRFx1NzY4NCBgbW9kZWAgXHU1MkEwXHU4RjdEIC5lbnYgXHU2NTg3XHU0RUY2XHJcbiAgLy8gXHU4QkJFXHU3RjZFXHU3QjJDXHU0RTA5XHU0RTJBXHU1M0MyXHU2NTcwXHU0RTNBICcnIFx1Njc2NVx1NTJBMFx1OEY3RFx1NjI0MFx1NjcwOVx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlx1RkYwQ1x1ODAwQ1x1NEUwRFx1N0JBMVx1NjYyRlx1NTQyNlx1NjcwOSBgVklURV9gIFx1NTI0RFx1N0YwMFx1MzAwMlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG4gIGNvbnN0IHsgQVBQX0VOViwgVklURV9HTE9CX0FQSV9VUkwgfSA9IGVudjtcclxuICBjb25zb2xlLmxvZygnZW52JywgQVBQX0VOViwgVklURV9HTE9CX0FQSV9VUkwpO1xyXG4gIHJldHVybiB7XHJcbiAgICAvLyB2aXRlIFx1OTE0RFx1N0Y2RVxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIF9fQVBQX0VOVl9fOiBKU09OLnN0cmluZ2lmeShlbnYuQVBQX0VOViksXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIFVub0NTUygpLFxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgICAgIGN1c3RvbURvbUlkOiAnX19zdmdfX2ljb25zX19kb21fXycsXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IFt7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfV0sXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogXCJAaW1wb3J0ICcvc3JjL3N0eWxlcy9pbmRleC5zY3NzJztcIiwgLy8gXHU1RjE1XHU1MTY1XHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZXNzOiB7XHJcbiAgICAgICAgICBtYXRoOiAncGFyZW5zLWRpdmlzaW9uJywgLy8gXHU2MzA3XHU1QjlBXHU0RjIwXHU5MDEyXHU3RUQ5IGxlc3MgXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XHU3Njg0XHU5MDA5XHU5ODc5XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBcdTU3MjguZW52LnByb2R1Y3Rpb25cdTY1ODdcdTRFRjZcdTRFMkRcdTkxNERcdTdGNkUgVklURV9EUk9QX0NPTlNPTEUgPSB0cnVlLFxyXG4gICAgLy8gXHU2MjUzXHU1MzA1XHU2NUY2XHU4MUVBXHU1MkE4XHU1M0JCXHU5NjY0Y29uc29sZVx1NTQ4Q2RlYnVnZ2VyXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIGRyb3A6IGVudj8uVklURV9EUk9QX0NPTlNPTEUgPT09ICd0cnVlJyA/IFsnY29uc29sZScsICdkZWJ1Z2dlciddIDogW10sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVYLE9BQU8sU0FBUztBQUN2WSxPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQWMsZUFBZTtBQUN0QyxTQUFTLDRCQUE0QjtBQUxyQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBR2pELFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxRQUFNLEVBQUUsU0FBUyxrQkFBa0IsSUFBSTtBQUN2QyxVQUFRLElBQUksT0FBTyxTQUFTLGlCQUFpQjtBQUM3QyxTQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQSxNQUNOLGFBQWEsS0FBSyxVQUFVLElBQUksT0FBTztBQUFBLElBQ3pDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLFFBQ3JELFVBQVU7QUFBQSxRQUNWLGFBQWE7QUFBQSxNQUNmLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBYSxRQUFRLGtDQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDL0Q7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBO0FBQUEsUUFDbEI7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKLE1BQU07QUFBQTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQSxJQUdBLFNBQVM7QUFBQSxNQUNQLE1BQU0sS0FBSyxzQkFBc0IsU0FBUyxDQUFDLFdBQVcsVUFBVSxJQUFJLENBQUM7QUFBQSxJQUN2RTtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
