import SeoData from 'types/SeoData';

const generateSEOData = ({ title, subtitle }: SeoData) => {
  return {
    title: title,
    description: subtitle,
    metadataBase: new URL(process.env.PROD_URL || 'https://.github.io'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
  };
};

export default generateSEOData;
