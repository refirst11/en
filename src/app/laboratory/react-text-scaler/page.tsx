import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import LaboratoryDemo from 'components/LaboratoryDemo';
import { TextScaler } from 'components/demos/TextScaler';

export const metadata: Metadata = generateSEOData({
  title: 'React Text Scaler - Refirst',
  subtitle: 'Scaling Text for User Interface',
});

const Page = () => {
  return (
    <LaboratoryDemo
      title="React Text Scaler"
      subtitle="Scaling Text for User Interface"
      repository="https://github.com/refirst11/react-text-scaler"
    >
      <p>Drag the T left or right to scale the text in this page.</p>
      <TextScaler />
    </LaboratoryDemo>
  );
};

export default Page;
