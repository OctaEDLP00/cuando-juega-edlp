import eslint from '@eslint/js';
import { configs as configsAstro, environments } from 'eslint-plugin-astro'
import tsEslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

const pluginReact = eslintReact.configs.all.plugins;

export default tsEslint.config([
	{
    ignores: ["node_modules/", "dist/", "pnpm-lock.yaml", "npm-lock.json"]
  },
	eslint.configs.recommended,
  tsEslint.configs.recommended,
	...configsAstro["flat/jsx-a11y-recommended"],
  ...configsAstro["flat/recommended"],
	{
    files: ["**/*.astro"],
    languageOptions: {
      globals: environments.astro.globals,
      parser: parserAstro,
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: parserTs
      }
    },
    processor: "astro/client-side-ts",
    // TODO: Add rules
    rules: {}
  },
  {
    files: ["**/*.astro/*.{js,ts}"],
    processor: "astro/client-side-ts",
    // TODO: Add rules
    rules: {}
  },
  {
    rules: {
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
	{
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			"@eslint-react": pluginReact["@eslint-react"],
			"@eslint-react/dom": pluginReact["@eslint-react/dom"],
			"@eslint-react/web-api": pluginReact["@eslint-react/web-api"],
			"react-hooks": pluginReactHooks,
			"@eslint-react/hooks-extra": pluginReact["@eslint-react/hooks-extra"],
			"@eslint-react/naming-convention": pluginReact["@eslint-react/naming-convention"],
			"react-refresh": pluginReactRefresh
		},
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				ecmaFeatures: { jsx: true }
			}
		},
		rules: {
			...eslintReact.configs.recommended.rules,
			...eslintReact.configs.dom.rules,
			...eslintReact.configs["recommended-typescript"].rules,
			...pluginReactHooks.configs.recommended.rules,
			...pluginReactRefresh.configs.recommended.rules
		}
	}
])
