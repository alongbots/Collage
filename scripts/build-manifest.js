// node scripts/build-manifest.js
// Scrapes the collage homepage and writes public/skins.json (static, instant load)

const fs = require('fs');
const path = require('path');
const BASE = 'https://mlbbautocollage.vercel.app';

(async () => {
  console.log('Fetching', BASE, '...');
  const html = await fetch(BASE, {
    headers: { 'User-Agent': 'mlbb-skins-build/1.0' },
  }).then((r) => r.text());

  const seen = new Set();
  const skins = [];

  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const alt = (tag.match(/alt="([^"]*)"/i) || [, ''])[1].trim();
    const src = (tag.match(/src="([^"]*)"/i) || [, ''])[1].trim();
    if (!src || !src.includes('/skins/')) continue;
    if (seen.has(src)) continue;
    seen.add(src);

    const url = new URL(src, BASE).href;
    const name = alt || decodeURIComponent(url.split('/').pop().replace(/\.(webp|jpe?g|png|gif)$/i, ''));
    const ext = /\.(webp|jpe?g|png|gif)$/i.exec(url)?.[0] || '.jpg';
    const file = name.replace(/[\\/:*?"<>|]+/g, '_').replace(/\s+/g, ' ').trim() + ext;
    skins.push({ name, url, file });
  }

  const seenFiles = new Map();
  for (const s of skins) {
    const n = seenFiles.get(s.file) || 0;
    seenFiles.set(s.file, n + 1);
    if (n > 0) {
      const dot = s.file.lastIndexOf('.');
      s.file = s.file.slice(0, dot) + ` (${n + 1})` + s.file.slice(dot);
    }
  }

  const out = { count: skins.length, generatedAt: new Date().toISOString(), source: BASE, skins };
  const dest = path.join(__dirname, '..', 'public', 'skins.json');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, JSON.stringify(out, null, 2));
  console.log(`Saved ${skins.length} skins -> public/skins.json`);
})().catch((e) => { console.error(e); process.exit(1); });
