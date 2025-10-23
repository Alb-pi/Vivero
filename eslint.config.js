// eslint.config.js


import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 'error',
    'import/no-relative-parent-imports': 'warn', // ⚠️ Detecta ../../
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@pages', './src/pages'],
          ['@assets', './src/assets'],
          ['@data', './src/data'],
          ['@styles', './src/styles'],
          ['@types', './src/types'],
          ['@utils', './src/utils'],
          ['@hooks', './src/hooks'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
},
])
