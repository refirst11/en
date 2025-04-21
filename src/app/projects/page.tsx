import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';
import { styles } from 'app/listup';

export const metadata: Metadata = generateSEOData({ title: 'Projects - Refirst' });

const Page = (): JSX.Element => {
  return (
    <>
      <div className={styles.list}>
        <a href="https://github.com/refirst11/rscute">
          <span>rscute</span>
          <span className={styles.tag}>Faster executor for TypeScript with path resolution</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/refirst11/next-link-transitions">
          <span>next-link-transitions</span>
          <span className={styles.tag}>View Transition API for Next SC</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/zss-engine">
          <span>zss-utils</span>
          <span className={styles.tag}>Zero-Runtime Style Sheet Utilities</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/zss-engine">
          <span>zss-engine</span>
          <span className={styles.tag}>Zero-Runtime Style Sheet Engine</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/eslint-plugin-zss-lint">
          eslint-plugin-zss-lint
          <span className={styles.tag}>Linting for object CSS in JS</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://plumeria.dev">
          <span>Plumeria</span>
          <span className={styles.tag}>CSS in JS with faster development cycle</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/typedcssx">
          TypedCSSX
          <span className={styles.tag}>(Archived, This Inherited by Plumeria)</span>
          <div />
          <span className={styles.date}>2024</span>
        </a>
        <a href="https://github.com/refirst11/firemotion">
          firemotion
          <span className={styles.tag}>Static based page transition motion</span>
          <div />
          <span className={styles.date}>2024</span>
        </a>
        <a href="https://projects-refirst.vercel.app/react-page-fitter">
          React Fukuwarai
          <span className={styles.tag}>Make draggable</span>
          <div />
          <span className={styles.date}>2023</span>
        </a>
        <a href="https://projects-refirst.vercel.app/react-text-scaler">
          React Text Scaler
          <span className={styles.tag}>Scaling Text for User Interface</span>
          <div />
          <span className={styles.date}>2023</span>
        </a>

        <a href="https://projects-refirst.vercel.app/react-magic-card">
          React Magic Card
          <span className={styles.tag}>Beautiful slide images</span>
          <div />
          <span className={styles.date}>2023</span>
        </a>
      </div>
    </>
  );
};

export default Page;
