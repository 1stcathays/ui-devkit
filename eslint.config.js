module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
  },
  extends: ['standard', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  ignorePatterns: ['node_modules', '**/package-lock.json', 'coverage'],
  rules: {},
};
