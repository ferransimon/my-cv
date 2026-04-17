// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.googleicons(),
      name: 'Material Symbols Outlined',
      cssVariable: '--font-icons',
      weights: [400]
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 700]
    },
    {
      provider: fontProviders.google(),
      name: 'Manrope',
      cssVariable: '--font-heading',
      weights: [700]
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});