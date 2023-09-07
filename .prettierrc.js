export default {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false
      }
    }
  ]
}
