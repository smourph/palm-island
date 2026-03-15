import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'dist',
      'dist/**',
      'coverage',
      'coverage/**',
      'playwright-report',
      'playwright-report/**',
      'test-results',
      'test-results/**',
      '.idea/**',
      '.yarn/**',
      'node_modules/**',
    ],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.{ts,vue}', 'e2e/**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['src/**/*.{spec,test}.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        expect: 'readonly',
        it: 'readonly',
      },
    },
  },
  {
    files: ['e2e/**/*.ts', 'vite.config.ts', 'vitest.config.ts', 'playwright.config.ts', 'eslint.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
  prettier,
]
