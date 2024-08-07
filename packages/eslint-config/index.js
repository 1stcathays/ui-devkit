module.exports = {
  root: true,
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['build', 'public/build'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before',
          },
          {
            group: 'builtin',
            pattern: 'react-dom/**',
            position: 'before',
          },
          {
            group: 'external',
            pattern: '@remix-run/**',
            position: 'before',
          },
          {
            group: 'external',
            pattern: '@1st-cathays/**',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    semi: ['error', 'always'],
    'sort-keys': 'off',
  },
};
