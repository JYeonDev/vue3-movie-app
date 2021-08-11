module.exports = {
  env: {
    browser: true,  // 브라우저내에서 코드검사를 한다.
    node: true    // 노드내에서 코드검사를 한다.
  },
  extends: [  // 코드검사를 할 규칙 명시
    // vue
    //'plugin:vue/vue3-essential',  // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended',  // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 기본적인 규칙들을 사용할때는 rules 구성 생략가능
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}