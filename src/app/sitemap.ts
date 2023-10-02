import getAllPosts from 'lib/getAllPosts';

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

export default async function sitemap() {
  const posts = await getPosts();
  const url = process.env.PROD_URL;

  const post = posts.map((post) => ({
    url: url + '/' + post.slug,
    lastModified: new Date(post.date),
  }));

  const routes = ['', '/posts', '/mail'].map((route) => ({
    url: url + route,
    lastModified: new Date(),
  }));

  return [...routes, ...post];
}
