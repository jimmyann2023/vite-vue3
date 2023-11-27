import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss';

// 使用方法可参照 https://unocss.dev/interactive/
export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerVariantGroup()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
    },
  ],
});
