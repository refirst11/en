import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';
import { css } from '@plumeria/core';
import { listup } from 'app/listup';

const styles = css.create({
  ...listup,
  list2: {
    position: 'relative',
    top: 40,
    width: '100%',
    padding: '0 16px',
    '& li': {
      paddingTop: 5,
    },

    '& li a': {
      fontWeight: 'bold',
      color: 'black',
    },
  },
});

export const metadata: Metadata = generateSEOData({ title: 'Projects - Refirst' });

const Page = (): JSX.Element => {
  return (
    <>
      <div className={styles.list}>
        <a href="https://plumeria-docs.vercel.app/">
          <span>Plumeria</span>
          <span className={styles.tag}>CSS in JS with emphasis on ease of use</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/zss-engine">
          <span>zss-engine</span>
          <span className={styles.tag}>Runtime of Zero-Runtime Style Sheet</span>
          <div />
          <span className={styles.date}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/eslint-plugin-object-css">
          eslint-plugin-object-css
          <span className={styles.tag}>Linter for object CSS in JS</span>
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
          <span className={styles.tag}>Static css based page transition animations</span>
          <div />
          <span className={styles.date}>2024</span>
        </a>
      </div>
      <ul className={styles.list2}>
        <div>
          Created other projects (would you visit on{' '}
          <a href="https://github.com/refirst11">
            <u>Github</u>
          </a>
          )
        </div>
        <li>
          <a href="https://projects.su-pull.net/react-page-fitter">React Fukuwarai</a>
        </li>
        <li>
          <a href="https://projects.su-pull.net/react-text-scaler">React Text Scaler</a>
        </li>
        <li>
          <a href="https://projects.su-pull.net/react-magic-card">React Magic Card</a>
        </li>
      </ul>
    </>
  );
};

export default Page;
