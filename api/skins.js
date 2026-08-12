// Scrapes https://mlbbautocollage.vercel.app and builds a JSON manifest:
// [{ name, url, file }]  — name from <img alt>, url from <img src>.

const BASE = 'https://mlbbautocollage.vercel.app';
const RAW = false; // set true once you deploy /skins/raw/ full-res images

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const sanitize = (name) =>
  name.replace(/[\\/:*?"<>|]+/g, '_').replace(/\s+/g, ' ').trim();

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=300');

  try {
    const html = await fetch(BASE, {
      headers: { 'User-Agent': 'mlbb-skins-downloader/1.0' },
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

      let url = new URL(src, BASE).href;
      if (RAW) {
        url = url.replace('/skins/thumbs/', '/skins/raw/').replace(/\.webp$/, '');
      }

      const name = decode(alt) || decodeURIComponent(url.split('/').pop().replace(/\.(webp|jpe?g|png|gif)$/i, ''));
      const ext = /\.(webp|jpe?g|png|gif)$/i.exec(url)?.[0] || '.jpg';
      const file = sanitize(name) + ext;

      skins.push({ name, url, file });
    }

    // guarantee unique filenames inside the zip
    const seenFiles = new Map();
    for (const s of skins) {
      const n = seenFiles.get(s.file) || 0;
      seenFiles.set(s.file, n + 1);
      if (n > 0) {
        const dot = s.file.lastIndexOf('.');
        s.file = s.file.slice(0, dot) + ` (${n + 1})` + s.file.slice(dot);
      }
    }

    res.status(200).json({
      count: skins.length,
      generatedAt: new Date().toISOString(),
      source: BASE,
      skins,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
