module.exports = {
  extends: ['airbnb-base', 'react-app', 'plugin:prettier/recommended'],
  rules: {
    // Prettier
    'prettier/prettier': 1,
    // Import
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        paths: ['src'],
      },
    },
  },
};
