module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
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
    'no-extra-semi': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-whitespace-before-property': 'off',
    'rest-spread-spacing': 'off',

    'no-mixed-operators': 'off',
    'no-unexpected-multiline': 'off',
  },
};
