module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [],
  // ここにカスタムルールを追加します。
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false
      }
    ],
  }
}