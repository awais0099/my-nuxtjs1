// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwind from 'eslint-plugin-tailwindcss'

export default withNuxt([
  // 1. Tailwind Support
  ...tailwind.configs['flat/recommended'],

  // 2. Custom Production Rules
  {
    files: ['**/*.vue'],
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
])