module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/script-setup-uses-vars': ['off'],
    'vue/no-invalid-model-keys': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/no-deprecated-v-is': ['error'],
    'eol-last': ['error', 'always'],
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignorePattern: 'webpackChunkName'
    }],
    'linebreak-style': ['error', 'unix'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'vue/new-line-between-multi-line-property': ['warn'],
    'vue/no-empty-component-block': ['warn'],
    'vue/no-multiple-objects-in-class': ['warn'],
    'vue/no-potential-component-option-typo': ['warn'],
    'vue/match-component-file-name': ['warn', {
      shouldMatchCase: true
    }],
    'vue/no-this-in-before-route-enter': ['warn'],
    'vue/no-useless-mustaches': ['warn'],
    'vue/no-useless-v-bind': ['warn'],
    'vue/padding-line-between-blocks': ['warn'],
    'vue/require-direct-export': ['warn'],
    'vue/require-emit-validator': ['warn'],
    'vue/v-on-event-hyphenation': ['warn'],
    'vue/v-on-function-call': ['warn'],
    'vue/valid-next-tick': ['warn'],
    'vue/arrow-spacing': ['warn'],
    'vue/block-spacing': ['warn'],
    'vue/brace-style': ['warn'],
    'vue/require-default-prop': ['off'],
    'vue/valid-template-root': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/singleline-html-element-content-newline': ['off']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
