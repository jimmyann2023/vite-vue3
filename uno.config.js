import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// https://github.com/unocss/unocss#readme
// 使用方法可参照 https://unocss.dev/interactive/
export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'wh-full': 'w-full h-full',
      'flex-ac': 'flex justify-around items-center',
      'flex-bc': 'flex justify-between items-center',
    },
  ],
});
