module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'dot-location': 'off',
    'new-parens': 'off',
    'no-whitespace-before-property': 'off',
    'rest-spread-spacing': 'off',

    'no-mixed-operators': 'off',
  },
};
