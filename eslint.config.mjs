import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'

export default antfu(
  {
    react: true,
    typescript: true,
    isInEditor: false,
    formatters: {
      css: true,
    },
    ignores: ['next-env.d.ts'],
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    rules: {
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'regexp/no-unused-capturing-group': 'off', // Allow the use of unused capturing group
      'unused-imports/no-unused-vars': 'off', // Allow the use of unused vars
    },
  },
)
