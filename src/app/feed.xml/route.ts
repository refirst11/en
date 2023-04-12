import getAllPosts from 'lib/getAllPosts';

const getPosts = async () => {
  const posts = await getAllPosts();
  return posts;
};

export async function GET() {
  const posts = await getPosts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>su-pull</title>
        <link>${process.env.PROD_URL}</link>
        <description>the 2xxx year fight of my load</description>
        ${posts
          .map(
            (post) => `
              <item>
                <title>${post.title}</title>
                <description>${post.subtitle}</description>
                <link>${post.slug}</link>
                <pubDate>${post.date}</pubDate>
              </item>
            `
          )
          .join('')}
      </channel>
    </rss>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
