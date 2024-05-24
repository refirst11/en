import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.PROD_URL || '';
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
      priority: 1.2,
    },
    {
      url: url + '/mail',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
