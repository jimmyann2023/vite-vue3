module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['vue'],
  rules: {
    // off or 0 - 关闭(禁用)规则
    // warn or 1 - 将规则视为一个警告（并不会导致检查不通过）
    // error or 2 - 将规则视为一个错误 (退出码为1，检查不通过)
    'prettier/prettier': 'error',
    //  'eol-last': 2, // 强制文件以换行符结束(LF)

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 0, //不能有声明后未被使用的变量或参数
    'no-delete-var': 2, // 不允许在变量上使用 delete 操作符

    'prefer-const': 2, // 使用 let 关键字声明的变量, 但在初始分配后从未重新分配变量,应该为 const 声明
    'template-curly-spacing': 'off',
    'generator-star-spacing': 'off', //生成器函数`*`的前后空格都要有间距

    'vue/multi-word-component-names': 'off', // 不校验组件名
    'vue/attribute-hyphenation': 0, // 忽略属性连字
    'vue/html-self-closing': 0, // 忽略 html 标签自闭合
    // 'vue/singleline-html-element-content-newline': 0, // 单行 html 元素内容在新的一行
    // 'vue/multiline-html-element-content-newline': 0, // 多行 html 元素内容在新的一行
    // html右括号在新的一行
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
