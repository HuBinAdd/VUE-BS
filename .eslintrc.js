module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
  },
  plugins: [
    // required to lint *.vue files
    'html',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'scripts/webpack.conf.js'
      }
    }
  },
  globals: {
    "bus": true
  },
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'camelcase': 0,
    'new-cap': 0,
    "no-new": 0,
    "callback-return": 0,
    "consistent-return": 0,
    'no-unused-expressions': 'off',
    'import/first': 'off',
    'linebreak-style': 'off',
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    'eol-last': 'off',
    'no-param-reassign': ['error', {props: false}],
    'no-use-before-define': ['error', 'nofunc'],
    'no-mixed-operators': 'off',
    'no-bitwise': ['error', {int32Hint: true}],
    'arrow-parens': ['error', 'as-needed'],
    'prefer-promise-reject-errors': 'off',
    'prefer-destructuring': ['error', {array: false}],
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'no-console': ['warn', {
      allow: ['error', 'warn', 'info'],
    }],
  },
};

