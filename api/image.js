const ALLOW = 'https://mlbbautocollage.vercel.app/';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return res.status(204).end();
  }

  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'missing ?url=' });
  if (!url.startsWith(ALLOW)) return res.status(403).json({ error: 'url not allowed' });

  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'mlbb-skins-downloader/1.0' },
      signal: AbortSignal.timeout(15000),
    });
    if (!r.ok) return res.status(502).json({ error: 'upstream ' + r.status });

    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader('Content-Type', r.headers.get('content-type') || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.status(200).send(buf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
