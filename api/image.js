// CORS proxy: /api/image?url=<encoded image url>
// Needed because browser fetch of images from another Vercel domain is blocked by CORS.

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'missing ?url=' });

  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'mlbb-skins-downloader/1.0' },
    });
    if (!r.ok) return res.status(502).json({ error: `upstream ${r.status}` });

    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', r.headers.get('content-type') || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.status(200).send(buf);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
