import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  astro: true,
  ignores: [
    // Ignore all files in components/ui directory (shadcn)
    'src/components/ui/**',
  ],
})

