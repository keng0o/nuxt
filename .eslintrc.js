module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "vue/no-multi-spaces": 1,
    "vue/html-indent": ["error", 2],
    "vue/html-closing-bracket-spacing": "error",
    "vue/max-attributes-per-line": 2,
    "prettier/prettier": ["error", { "semi": false, "trailingComma": "es5", "singleQuote": true }]
  }
}
