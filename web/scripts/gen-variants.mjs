// Genera las variantes responsive de una foto a partir de un máster de alta resolución
// (p. ej. salida de Upscayl). Reduce desde el máster (downscale = nítido) a cada ancho y
// formato con los nombres que la web ya espera: <slug>-<w>.<ext> en public/destacados/.
//
//   node scripts/gen-variants.mjs "<ruta-del-master>" <slug>
//   ej: node scripts/gen-variants.mjs "../DESIGN/.../IMG1_upscayl_3840px.webp" la-castellana-jardin
//
// Solo baja de tamaño: si el máster es más chico que un ancho objetivo, ese ancho se omite
// (nunca reescala hacia arriba, para no inventar píxeles).

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [, , masterArg, slug] = process.argv;
if (!masterArg || !slug) {
  console.error('Uso: node scripts/gen-variants.mjs "<master>" <slug>');
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'destacados');
const master = path.resolve(process.cwd(), masterArg);

const WIDTHS = [640, 1280, 1920, 2560, 3840];
const Q = { jpg: 86, webp: 84, avif: 62 };

const src = sharp(master, { limitInputPixels: false });
const meta = await src.metadata();
console.log(`Máster: ${meta.width}×${meta.height} (${meta.format})`);

for (const w of WIDTHS) {
  if (w > meta.width) {
    console.log(`· ${w}w  omitido (el máster mide ${meta.width}px de ancho)`);
    continue;
  }
  const base = sharp(master, { limitInputPixels: false }).resize({ width: w, withoutEnlargement: true });
  const out = (ext) => path.join(outDir, `${slug}-${w}.${ext}`);
  await Promise.all([
    base.clone().jpeg({ quality: Q.jpg, mozjpeg: true }).toFile(out('jpg')),
    base.clone().webp({ quality: Q.webp }).toFile(out('webp')),
    base.clone().avif({ quality: Q.avif, effort: 4 }).toFile(out('avif')),
  ]);
  console.log(`✓ ${w}w  jpg/webp/avif`);
}
console.log('Listo.');
