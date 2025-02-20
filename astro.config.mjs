import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    imageService: true,
  }),
});