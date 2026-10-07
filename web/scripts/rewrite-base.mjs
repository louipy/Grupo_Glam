// Post-build: prefija rutas absolutas ("/algo") con la BASE de despliegue para
// que el sitio funcione servido bajo subruta en GitHub Pages (p. ej. /Grupo_Glam/).
//
// Astro ya prefija sus propios assets generados (/_astro/…) cuando `base` está
// definida; lo que NO toca son las rutas absolutas escritas a mano en los
// componentes (enlaces de navegación, imágenes de /public, srcset, iconos del
// manifest). Este script recorre dist/ y las normaliza.
//
// Solo actúa si PAGES_BASE está definida; en producción (base "/") es un no-op,
// así que el código fuente queda limpio y portable.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, extname } from 'node:path';

const base = (process.env.PAGES_BASE || '').replace(/\/+$/, ''); // "/Grupo_Glam"
if (!base) {
  console.log('[rewrite-base] PAGES_BASE sin definir → no-op (build de producción).');
  process.exit(0);
}

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));

// ¿Es una ruta absoluta de nuestro sitio que hay que prefijar?
const shouldPrefix = (p) =>
  p.startsWith('/') &&
  !p.startsWith('//') &&
  p !== base &&
  !p.startsWith(base + '/') &&
  !p.startsWith('/_astro/'); // por si acaso: assets de Astro ya van con base

const withBase = (p) => (shouldPrefix(p) ? base + p : p);

// Reescribe un valor de srcset: "url1 640w, url2 1280w" → prefija cada url.
const rewriteSrcset = (value) =>
  value
    .split(',')
    .map((part) => {
      const seg = part.trim();
      if (!seg) return part;
      const [url, ...descr] = seg.split(/\s+/);
      return [withBase(url), ...descr].join(' ');
    })
    .join(', ');

function rewriteHtml(html) {
  let out = html;
  // Atributos de un solo recurso: href, src, poster, content
  out = out.replace(
    /\b(href|src|poster|content)="(\/[^"]*)"/g,
    (m, attr, val) => `${attr}="${withBase(val)}"`,
  );
  // srcset (varias URLs)
  out = out.replace(
    /\bsrcset="([^"]*)"/g,
    (m, val) => `srcset="${rewriteSrcset(val)}"`,
  );
  // url(/…) en estilos inline o bloques <style>
  out = out.replace(
    /url\((\/[^)'"]*)\)/g,
    (m, val) => `url(${withBase(val)})`,
  );
  return out;
}

// El manifest PWA lleva rutas de iconos absolutas ("src": "/icon-192.png").
function rewriteManifest(json) {
  return json.replace(
    /"src"\s*:\s*"(\/[^"]*)"/g,
    (m, val) => `"src": "${withBase(val)}"`,
  );
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let changed = 0;
for await (const file of walk(distDir)) {
  const ext = extname(file).toLowerCase();
  if (ext === '.html') {
    const src = await readFile(file, 'utf8');
    const out = rewriteHtml(src);
    if (out !== src) {
      await writeFile(file, out);
      changed++;
    }
  } else if (file.endsWith('.webmanifest') || file.endsWith('site.webmanifest')) {
    const src = await readFile(file, 'utf8');
    const out = rewriteManifest(src);
    if (out !== src) {
      await writeFile(file, out);
      changed++;
    }
  }
}

console.log(`[rewrite-base] base="${base}" · ${changed} archivo(s) reescritos.`);
