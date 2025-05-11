import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default defineConfig([
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			'comma-dangle': ['error', 'always-multiline']
			'space-before-function-paren': 'off',
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					'argsIgnorePattern': '^_',
					'varsIgnorePattern': '^_',
					'caughtErrorsIgnorePattern': '^_'
				}
			],
			'no-multiple-empty-lines': 'off',
			'no-tabs': 'off',
			indent: [ 'warn', 'tab' ],
			quotes: [ 'warn', 'single' ],
			'jsx-quotes': [ 'warn', 'prefer-single' ],
			'eol-last': 'off',
			'padded-blocks': 'off'
		}
	},
	{
		files: [ "*.astro" ],
		parserOptions: {
			parser: "@typescript-eslint/parser",
			extraFileExtension: [ ".astro" ]
		},
		rules: {
			"astro/no-set-html-directive": "error",
			"space-before-function-paren": "off"
		}
	}
])
