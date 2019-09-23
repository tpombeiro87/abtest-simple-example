module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['filenames', 'jsx-a11y', 'react', 'react-perf', 'react-hooks'],
  settings: {
    react: {
      version: '16',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    complexity: ['warn', { max: 7 }],
    'filenames/match-regex': ['warn', '^_?[a-z0-9-.]+$'],
    'react/jsx-sort-props': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-no-bind': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
      },
    ],
    'import/export': 'warn',
    'prefer-template': 'warn',
    'no-shadow': 'warn',
    'object-shorthand': 'warn',
    'no-else-return': 'warn',
    'global-require': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
  }
}
