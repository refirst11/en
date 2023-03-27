import RSS from 'rss';
import getAllPosts from 'libs/getAllPosts';

export async function generateFeedXml() {
  const feed = new RSS({
    title: 'su-pull.net',
    description: 'su memo application',
    site_url: 'https://su-pull.net',
    feed_url: 'https://su-pull.net/atom.xml',
    language: 'en',
  });

  const posts = await getAllPosts();
  posts
    .map((post) => {
      feed.item({
        title: post.title,
        description: post.subtitle,
        date: post.date,
        url: `https://su-pull.net/posts/${post.slug}`,
      });
    })
    .reverse();

  return feed.xml();
}
