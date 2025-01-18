const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  unocss: true,
  formatters: true,
  rules: {
    'vue/html-self-closing': 'off',
    'antfu/top-level-function': 'off',
    'no-console': 'off',
  },
})
