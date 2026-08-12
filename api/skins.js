const BASE = 'https://mlbbautocollage.vercel.app';
const TIMEOUT_MS = 8000;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=300');

  try {
    const html = await fetch(BASE, {
      headers: { 'User-Agent': 'mlbb-skins-downloader/1.0' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
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
        s.file = s.file.slice(0, dot) + ' (' + (n + 1) + ')' + s.file.slice(dot);
      }
    }

    res.status(200).json({
      count: skins.length,
      generatedAt: new Date().toISOString(),
      source: BASE,
      skins,
    });
  } catch (err) {
    res.status(500).json({
      error: err.name === 'TimeoutError' ? 'Upstream fetch timed out (8s)' : err.message,
    });
  }
};
