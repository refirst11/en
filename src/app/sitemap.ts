import getAllPosts from 'lib/getAllPosts';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.PROD_URL || '';
  const posts = await getAllPosts();
  const currentDate = new Date();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${url}/posts/${post.slug}`,
    lastModified: currentDate,
    priority: 0.5,
  }));
  const laboratory: MetadataRoute.Sitemap = ['react-magic-card', 'react-page-fitter', 'react-text-scaler'].map(
    (slug) => ({
      url: `${url}/laboratory/${slug}`,
      lastModified: currentDate,
      priority: 0.5,
    }),
  );
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: url + '/posts',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: url + '/laboratory',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postPages,
    ...laboratory,
  ];
}
