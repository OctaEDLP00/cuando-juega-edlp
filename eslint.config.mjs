import eslint from '@eslint/js'
import configLove from 'eslint-config-love'
import configPrettier from 'eslint-config-prettier'
import pluginAstro from 'eslint-plugin-astro'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist/*'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslint.configs.recommended,
  configPrettier,
  ...pluginAstro.configs['flat/recommended'],
  ...pluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    languageOptions: { ...globals },
    files: ['**/*.{js,mjs}', '**/*.ts'],
    ...configLove,
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    files: ['*.astro'],
    languageOptions: {
      globals: environments.astro.globals,
      parser: parserAstro,
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    processor: 'astro/client-side-ts',
    rules: {
      semi: ['warn', 'single'],
    },
  },
  {
    rules: {
      semi: ['warn', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'space-before-function-paren': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-multiple-empty-lines': 'off',
      'no-tabs': 'off',
      indent: ['warn', 'tab'],
      quotes: ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'eol-last': 'off',
      'padded-blocks': 'off',
    },
  },
  {
    files: ['*.astro'],
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtension: ['.astro'],
    },
    rules: {
      'astro/no-set-html-directive': 'error',
      'space-before-function-paren': 'off',
    },
  },
]
