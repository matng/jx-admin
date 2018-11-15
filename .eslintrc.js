module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'no-unused-vars': 0,
    'semi': 0,
    'no-unused-expressions': 0,
    'no-return-await': 0,
    'no-return-assign': 0,
    'no-else-return': 0,
    'prefer-promise-reject-errors': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}