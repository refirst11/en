import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';
import { styles } from 'app/listup';
import * as css from "@plumeria/core";
import { ListItem } from 'components/ListItem';

export const metadata: Metadata = generateSEOData({ title: 'Projects - Refirst' });

const Page = (): JSX.Element => {
  return (
    <div className={css.props(styles.list)}>
      <ListItem
        href={'https://github.com/rust-gear-project/rust-gear'}
        date="2025"
        subti="rapid faster glob powerd by Rust native(napi-rs)"
      >
        @rust-gear/glob
      </ListItem>
      <ListItem
        href="https://github.com/refirst11/rscute"
        date="2025"
        subti="Faster executor for TypeScript with path resolution"
      >
        rscute
      </ListItem>
      <ListItem href="https://plumeria.dev" date="2025" subti="CSS in JS with scalable and optimized styling">
        @plumeria/core
      </ListItem>
      <ListItem href="https://github.com/zss-in-js/zss-utils" date="2025" subti="Zero-Runtime StyleSheet Utilities">
        zss-utils
      </ListItem>
      <ListItem href="https://github.com/zss-in-js/zss-engine" date="2025" subti="Zero-Runtime StyleSheet Engine">
        zss-engine
      </ListItem>
      <ListItem
        href="https://github.com/zss-in-js/typedcssx"
        date="2024"
        subti="(Archived, This Inherited by Plumeria)"
      >
        TypedCSSX
      </ListItem>
      <ListItem href="https://github.com/refirst11/firemotion" date="2024" subti="Static based page transition motion">
        firemotion
      </ListItem>
      <ListItem href="https://plumeria.dev" date="2023" subti="Make draggable">
        React Fukuwarai
      </ListItem>
      <ListItem
        href="https://projects-refirst.vercel.app/react-text-scaler"
        date="2023"
        subti="Scaling Text for User Interface"
      >
        React Text Scaler
      </ListItem>
      <ListItem href="https://projects-refirst.vercel.app/react-magic-card" date="2023" subti="Beautiful slide images">
        React Magic Card
      </ListItem>
    </div>
  );
};

export default Page;
