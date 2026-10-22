import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import opentype from 'opentype.js';
import sharp from 'sharp';

const require = createRequire(import.meta.url);

/** Outline every letter with bundled fonts; rendering never needs system fonts. */
export async function outlineSocialArtwork(artwork: string): Promise<string> {
  const fonts = new Map<number, opentype.Font>();
  for (const weight of [400, 600]) {
    const bytes = await readFile(
      require.resolve(
        `@fontsource/inter/files/inter-latin-${weight}-normal.woff`,
      ),
    );
    fonts.set(weight, opentype.parse(Uint8Array.from(bytes).buffer));
  }

  return artwork.replace(
    /<text\b([^>]*)>([^<]*)<\/text>/g,
    (_, attributes: string, text: string) => {
      const attribute = (name: string) =>
        attributes.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
      const font = fonts.get(Number(attribute('font-weight') ?? 400));
      if (!font)
        throw new Error('Social artwork uses an unbundled font weight');
      const glyphs = [...text].map((character) => {
        if (!font.charToGlyphIndex(character))
          throw new Error(`Social artwork font lacks glyph: ${character}`);
        return font.charToGlyph(character);
      });
      const size = Number(attribute('font-size'));
      const spacing = Number(attribute('letter-spacing') ?? 0);
      const scale = size / font.unitsPerEm;
      const advances = glyphs.map(
        (glyph, index) =>
          (glyph.advanceWidth ?? 0) * scale +
          (index < glyphs.length - 1
            ? font.getKerningValue(glyph, glyphs[index + 1]) * scale + spacing
            : 0),
      );
      let x = Number(attribute('x'));
      if (attribute('text-anchor') === 'end')
        x -= advances.reduce((total, advance) => total + advance, 0);
      const path = new opentype.Path();
      glyphs.forEach((glyph, index) => {
        path.extend(glyph.getPath(x, Number(attribute('y')), size));
        x += advances[index];
      });
      path.fill = attribute('fill') ?? '#2d2d2d';
      return path.toSVG(2);
    },
  );
}

export async function renderSocialImage(
  artwork: string,
): Promise<Uint8Array<ArrayBuffer>> {
  const outlined = await outlineSocialArtwork(artwork);
  if (/<text\b/.test(outlined))
    throw new Error('Social artwork has unoutlined text');
  return new Uint8Array(await sharp(Buffer.from(outlined)).png().toBuffer());
}
