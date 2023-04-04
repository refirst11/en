import getAllPosts from 'lib/getAllPosts';

export async function GET() {
  const items = await getAllPosts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>su-pull</title>
        <link>${process.env.PROD_URL}</link>
        <description>the 2xxx year fight of my load</description>
        ${items
          .map(
            (item) => `
              <item>
                <title>${item.title}</title>
                <description>${item.subtitle}</description>
                <link>${item.slug}</link>
                <pubDate>${item.date}</pubDate>
              </item>
            `
          )
          .join('')}
      </channel>
    </rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
