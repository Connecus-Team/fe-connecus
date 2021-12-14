module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'no-invalid-this': 0,
    'max-len': ['error', {'code': 200}],
    'camelcase': 'off',
    'no-unused-vars': 'off',
    'new-cap': 'off',
    'brace-style': 'off',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'valid-jsdoc': 'off',
    'prefer-const': 'off',
    'react/display-name': 'off',
    'react/no-deprecated': 'off',
    'prefer-rest-params': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
