module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser' },
  plugins: ['import', '@typescript-eslint'],
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],

  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'no-unused-vars': 0,
    'import/order': [
      'error',
      {
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
