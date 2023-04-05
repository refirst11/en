import SeoData from 'types/SeoData';

const generateSEOData = ({ title, subtitle, date }: SeoData) => {
  return {
    title: title,
    description: subtitle,
    openGraph: {
      title: title,
      description: subtitle,
      url: process.env.PROD_URL,
      type: 'website',
      images: {
        url: `${process.env.PROD_URL}/api/ogp?title=${title}&date=${date}`,
        width: 1200,
        height: 600,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: subtitle,
      images: `${process.env.PROD_ENV}/api/ogp?title=${title}&date=${date}`,
      site: '@pull1102',
      creator: '@pull1102',
    },
  };
};

export default generateSEOData;
