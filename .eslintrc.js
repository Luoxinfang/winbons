module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 6,
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  env: {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'never'
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'if': {'before': false, 'after': false},
        'for': {'before': false, 'after': false},
        'while': {'before': false, 'after': false},
        'switch': {'before': false, 'after': false}
      }
    }],
    'spaced-comment': ["error", "never"]
  }
}
