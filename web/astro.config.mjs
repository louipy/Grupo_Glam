// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro 5 · output estático · Tailwind v4 vía plugin de Vite.
// i18n: es en la raíz (sin prefijo), en bajo /en/  — manifiesto §7.4
//
// Despliegue a GitHub Pages (preview) bajo subruta: se activa con la variable
// de entorno PAGES_BASE (ej. "/Grupo_Glam") que inyecta el workflow de CI.
// Sin esa variable el build es idéntico al de producción (dominio propio, raíz).
const PAGES_BASE = process.env.PAGES_BASE;

export default defineConfig({
  site: PAGES_BASE ? 'https://louipy.github.io' : 'https://grupoglaminmobiliaria.com',
  base: PAGES_BASE || '/',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
