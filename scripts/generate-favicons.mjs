import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Master SVG with Notion-style dark squircle container and crisp 3D isometric cube
const svgDarkSquircle = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <rect width="128" height="128" rx="28" fill="#09090B" />
  <rect x="1" y="1" width="126" height="126" rx="27" stroke="#27272A" stroke-width="2" fill="none" />
  <!-- Top Face -->
  <polygon points="64,18 108,42 64,66 20,42" fill="#FFFFFF" />
  <!-- Left Face (Shadow Facet) -->
  <polygon points="20,49 61,72 61,110 20,87" fill="#FFFFFF" opacity="0.45" />
  <!-- Right Face (Mid-tone Facet) -->
  <polygon points="67,72 108,49 108,87 67,110" fill="#FFFFFF" opacity="0.80" />
</svg>`;

// Also an adaptive SVG that supports both system dark and light modes
const svgAdaptive = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
  <style>
    :root {
      --bg-fill: #09090B;
      --border-stroke: #27272A;
      --cube-fill: #FFFFFF;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --bg-fill: #09090B;
        --border-stroke: #27272A;
        --cube-fill: #FFFFFF;
      }
    }
    .bg { fill: var(--bg-fill); }
    .border { stroke: var(--border-stroke); }
    .f-top { fill: var(--cube-fill); }
    .f-left { fill: var(--cube-fill); opacity: 0.45; }
    .f-right { fill: var(--cube-fill); opacity: 0.80; }
  </style>
  <rect width="128" height="128" rx="28" class="bg" />
  <rect x="1" y="1" width="126" height="126" rx="27" stroke-width="2" class="border" fill="none" />
  <polygon points="64,18 108,42 64,66 20,42" class="f-top" />
  <polygon points="20,49 61,72 61,110 20,87" class="f-left" />
  <polygon points="67,72 108,49 108,87 67,110" class="f-right" />
</svg>`;

async function generate() {
  const publicDir = path.resolve('public');
  const distDir = path.resolve('dist');

  // 1. Generate PNG sizes
  const sizes = [16, 32, 48, 180, 192, 512];
  const pngs = {};

  for (const size of sizes) {
    const buf = await sharp(Buffer.from(svgDarkSquircle))
      .resize(size, size, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer();
    pngs[size] = buf;
  }

  // 2. Write PNGs to public
  await fs.writeFile(path.join(publicDir, 'favicon-16x16.png'), pngs[16]);
  await fs.writeFile(path.join(publicDir, 'favicon-32x32.png'), pngs[32]);
  await fs.writeFile(path.join(publicDir, 'favicon-48x48.png'), pngs[48]);
  await fs.writeFile(path.join(publicDir, 'apple-touch-icon.png'), pngs[180]);

  // 3. Create Multi-Resolution ICO containing 16x16, 32x32, 48x48 PNG frames
  const icoSizes = [16, 32, 48];
  const icoPngBuffers = icoSizes.map((s) => pngs[s]);

  const headerSize = 6;
  const dirEntrySize = 16;
  const totalHeaderSize = headerSize + dirEntrySize * icoSizes.length;

  let currentOffset = totalHeaderSize;
  const headerBuf = Buffer.alloc(totalHeaderSize);

  headerBuf.writeUInt16LE(0, 0); // reserved
  headerBuf.writeUInt16LE(1, 2); // type 1 = ICO
  headerBuf.writeUInt16LE(icoSizes.length, 4); // count of images

  for (let i = 0; i < icoSizes.length; i++) {
    const size = icoSizes[i];
    const png = icoPngBuffers[i];
    const offset = headerSize + i * dirEntrySize;

    headerBuf.writeUInt8(size >= 256 ? 0 : size, offset);
    headerBuf.writeUInt8(size >= 256 ? 0 : size, offset + 1);
    headerBuf.writeUInt8(0, offset + 2); // color count
    headerBuf.writeUInt8(0, offset + 3); // reserved
    headerBuf.writeUInt16LE(1, offset + 4); // color planes
    headerBuf.writeUInt16LE(32, offset + 6); // bits per pixel
    headerBuf.writeUInt32LE(png.length, offset + 8); // image size
    headerBuf.writeUInt32LE(currentOffset, offset + 12); // image offset

    currentOffset += png.length;
  }

  const icoBuffer = Buffer.concat([headerBuf, ...icoPngBuffers]);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // 4. Update favicon.svg
  await fs.writeFile(path.join(publicDir, 'favicon.svg'), svgAdaptive, 'utf-8');

  // Also sync to dist if dist exists
  try {
    await fs.writeFile(path.join(distDir, 'favicon-16x16.png'), pngs[16]);
    await fs.writeFile(path.join(distDir, 'favicon-32x32.png'), pngs[32]);
    await fs.writeFile(path.join(distDir, 'favicon-48x48.png'), pngs[48]);
    await fs.writeFile(path.join(distDir, 'apple-touch-icon.png'), pngs[180]);
    await fs.writeFile(path.join(distDir, 'favicon.ico'), icoBuffer);
    await fs.writeFile(path.join(distDir, 'favicon.svg'), svgAdaptive, 'utf-8');
  } catch (_) {}

  console.log('Successfully generated all favicons: ICO (16,32,48), PNGs, SVG, and apple-touch-icon.');
}

generate().catch(console.error);
