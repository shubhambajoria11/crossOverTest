module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint-config-prettier'],
  plugins: ['prettier', 'react-native'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
