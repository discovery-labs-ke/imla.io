import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  astro: true,
  ignores: [
    'src/components/ui/**',
    'src/lib/utils.ts',
    'components.json',
    'astro.config.mjs',
    'tailwind.config.mjs',
    '.astro/**',
    '.netlify/**',
    'netlify.toml',
  ],
})
