// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Astro escribe alt="" como `alt` a secas. Es equivalente, pero algunos lectores y
// herramientas de auditoría lo muestran como "Image": se reescribe explícito.
const altVacioExplicito = {
  name: 'alt-vacio-explicito',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const raiz = fileURLToPath(dir);
      for (const archivo of await readdir(raiz, { recursive: true })) {
        if (!archivo.endsWith('.html')) continue;
        const ruta = join(raiz, archivo);
        const html = await readFile(ruta, 'utf8');
        const nuevo = html.replace(/(<img\b[^>]*?\s)alt(?=[\s>\/])/g, '$1alt=""');
        if (nuevo !== html) await writeFile(ruta, nuevo);
      }
    },
  },
};

export default defineConfig({
  site: 'https://sexualidad-activa.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') }), altVacioExplicito],
});
