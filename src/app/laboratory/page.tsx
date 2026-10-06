import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';
import { styles } from 'app/listup';
import { ListItem } from 'components/ListItem';

export const metadata: Metadata = generateSEOData({ title: 'Laboratory - Refirst' });

const Page = (): JSX.Element => {
  return (
    <div classStyle={styles.list}>
      <ListItem href="https://plumeria.dev/playground" date="2025" subti="crazy fast interfaces by oxc + rust">
        Plumeria
      </ListItem>
      <ListItem href={'https://github.com/rust-gear-project/rust-gear'} date="2025" subti="rust glob for js">
        rust-gear/glob
      </ListItem>
      <ListItem href="https://github.com/zss-in-js/zss-engine" date="2025" subti="zero-runtime style sheet engine">
        zss-engine
      </ListItem>
      <ListItem
        href="https://github.com/refirst11/rscute"
        date="2025"
        subti="fast executor for TypeScript JavaScript by swc"
      >
        rscute
      </ListItem>
      <ListItem href="/laboratory/react-page-fitter" date="2023" subti="make draggable">
        React Fukuwarai
      </ListItem>
      <ListItem
        href="/laboratory/react-text-scaler"
        date="2023"
        subti="scaling text for user interface"
      >
        React Text Scaler
      </ListItem>
      <ListItem href="/laboratory/react-magic-card" date="2023" subti="beautiful slide images">
        React Magic Card
      </ListItem>
    </div>
  );
};

export default Page;
