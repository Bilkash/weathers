module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: latest,
    sourceType: module
  },
  plugins: [react, react-native, react-hooks],
  rules: {
    react-hooks/rules-of-hooks: error,
    react-hooks/exhaustive-deps: warn,
    react/jsx-filename-extension: [off],
    no-undef: [error],
    indent: [
      error,
      tab
    ],
    linebreak-style: [
      error,
      windows
    ],
    quotes: [
      error,
      double
    ],
    semi: [
      error,
      always
    ],
    object-curly-spacing: [error, always],
    camelcase: error,
    max-len: [error, 80],
    jsx-quotes: [error, prefer-double],
    no-console: [error, { allow: [warn, error] }],
    react-native/no-inline-styles: error
  }
};
