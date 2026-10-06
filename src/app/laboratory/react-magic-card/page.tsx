import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import LaboratoryDemo from 'components/LaboratoryDemo';
import { MagicCard } from 'components/demos/MagicCard';

export const metadata: Metadata = generateSEOData({
  title: 'React Magic Card - Refirst',
  subtitle: 'Beautiful slide images',
});

const Page = () => {
  return (
    <LaboratoryDemo
      title="React Magic Card"
      subtitle="Beautiful slide images · Pexels pictures"
      repository="https://github.com/refirst11/react-magic-card"
    >
      <MagicCard />
    </LaboratoryDemo>
  );
};

export default Page;
