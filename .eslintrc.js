import { RULES } from './src/types/enum'

export default {
  env: {
    es2022: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-plugin',
    'plugin:@typesxript-eslint/recommended',
    'eslint-config-prettier',
    'standard',
    'plugin:astro/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': RULES.OFF,
    '@typescript-eslint/no-unused-vars': [
      RULES.WARN,
      {
        argsIgnorePatter: '^_',
        varsIgnorePatter: '^_',
        caughtErrorsIgnorePatter: '^_'
      }
    ],
    'no-multiple-empty-lines': RULES.OFF,
    'no-tabs': RULES.OFF,
    'comma-dangle': [RULES.ERROR, 'never'],
    ident: [RULES.WARN, 'space'],
    quotes: [RULES.WARN, 'single'],
    'jsx-quotes': [RULES.WARN, 'prefer-single'],
    'eol-last': RULES.OFF
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtension: ['*.astro']
      },
      rules: {
        'astro/no-set-html-direective': RULES.ERROR
      }
    }
  ]
}
