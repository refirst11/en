import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import LaboratoryDemo from 'components/LaboratoryDemo';
import { PageFitter } from 'components/demos/PageFitter';

export const metadata: Metadata = generateSEOData({
  title: 'React Page Fitter / React Fukuwarai - Refirst',
  subtitle: 'Make draggable',
});

const Page = () => {
  return (
    <LaboratoryDemo
      title="React Page Fitter / React Fukuwarai"
      subtitle="Make draggable · my dog room"
      repository="https://github.com/refirst11/react-page-fitter"
    >
      <p>Get a boolean value whether it fits in the viewport or target element.</p>
      <PageFitter />
      <h2>Fukuwarai</h2>
      <pre>
        <code>{'<Fukuwarai>\n  <Component />\n</Fukuwarai>'}</code>
      </pre>
      <h2>useFitter</h2>
      <pre>
        <code>{"const isFit = useFitter('#target')"}</code>
      </pre>
    </LaboratoryDemo>
  );
};

export default Page;
