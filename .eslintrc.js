// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // vue将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错。以下为取消该错误的检查。
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    // 关闭方法名和刮号之间需要有一个空格的检查
    "space-before-function-paren": 0,
    // 关闭代码缩进检查
    'indent': 'off'
  }
}
