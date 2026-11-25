import { defineConfig } from 'astro/config';

// User site: served at the root of https://girish011.github.io/, so no `base`.
export default defineConfig({
  site: 'https://girish011.github.io',
  trailingSlash: 'always',
});
