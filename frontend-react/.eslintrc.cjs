module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/api/graphql/generated/*.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'sort-imports-es6-autofix'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'sort-imports-es6-autofix/sort-imports-es6': 2,
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
