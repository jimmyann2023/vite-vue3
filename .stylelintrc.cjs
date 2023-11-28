// https://blog.csdn.net/m0_60273757/article/details/125762025
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recommended-less',
    'stylelint-config-recommended-scss',
  ],
  plugins: ['stylelint-order'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.json', '**/*.md'],
  rules: {
    // null =》关闭规则
    // always =》必须
    indentation: 2,
    'selector-pseudo-element-no-unknow': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoElements: ['global', 'v-deep', ':deep', 'deep'], // 忽略属性，修改antd 默认样式的时候能使用到
      },
    ],
  },
};
