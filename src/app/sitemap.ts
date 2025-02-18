import getAllPosts from 'lib/getAllPosts';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.VERCEL_URL || '';
  const posts = await getAllPosts();
  const currentDate = new Date();
  const personal: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${url}/personal/${post.slug}`,
    lastModified: currentDate,
    priority: 0.5,
  }));
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
      url: url + '/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...personal,
  ];
}
