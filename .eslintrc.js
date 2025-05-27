module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off', // Disable no-unused-vars rule
    'quotes': 'off', // Disable quotes rule
    'null': 'off', // Disable null rule
    'comma-dangle': 'off', // Disable comma-dangle rule
    'spaced-comment': 'off', // Disable spaced-comment rule
    'eol-last': 'off', // Disable eol-last rule
    'no-eq-null': 'off', // Disable the null rule if it exists
    'no-trailing-spaces': 'off', // Disable the rule to allow trailing spaces
    'padded-blocks': 'off', // Disable padded-blocks rule
    'no-nested-ternary': 'off', // Disables the no-nested-ternary rule
    'camelcase': 'off',
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',    
  },
  extends: [
    '@spotify/eslint-config-base',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
      },
    },
  ],  
};
