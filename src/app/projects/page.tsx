import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { JSX } from 'react';
import { styles } from 'app/listup';
import { css } from '@plumeria/core';

export const metadata: Metadata = generateSEOData({ title: 'Projects - Refirst' });

const Page = (): JSX.Element => {
  return (
    <>
      <div className={css.props(styles.list)}>
        <a href="https://github.com/rust-gear-project/rust-gear">
          <span>@rust-gear/glob</span>
          <span className={css.props(styles.tag)}>rapid faster glob powerd by Rust native(napi-rs)</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/refirst11/kpx">
          <span>kpx</span>
          <span className={css.props(styles.tag)}>TypeScript Module Loader(Key Process Execute)</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/refirst11/rscute">
          <span>rscute</span>
          <span className={css.props(styles.tag)}>Faster executor for TypeScript with path resolution</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/refirst11/next-link-transitions">
          <span>next-link-transitions</span>
          <span className={css.props(styles.tag)}>View Transition API for Next SC</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/zss-engine">
          <span>zss-utils</span>
          <span className={css.props(styles.tag)}>Zero-Runtime Style Sheet Utilities</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/zss-engine">
          <span>zss-engine</span>
          <span className={css.props(styles.tag)}>Zero-Runtime Style Sheet Engine</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/eslint-plugin-zss-lint">
          eslint-plugin-zss-lint
          <span className={css.props(styles.tag)}>Linting for object CSS in JS</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://plumeria.dev">
          <span>Plumeria</span>
          <span className={css.props(styles.tag)}>CSS in JS with faster development cycle</span>
          <div />
          <span className={css.props(styles.date)}>2025</span>
        </a>
        <a href="https://github.com/zss-in-js/typedcssx">
          TypedCSSX
          <span className={css.props(styles.tag)}>(Archived, This Inherited by Plumeria)</span>
          <div />
          <span className={css.props(styles.date)}>2024</span>
        </a>
        <a href="https://github.com/refirst11/firemotion">
          firemotion
          <span className={css.props(styles.tag)}>Static based page transition motion</span>
          <div />
          <span className={css.props(styles.date)}>2024</span>
        </a>
        <a href="https://projects-refirst.vercel.app/react-page-fitter">
          React Fukuwarai
          <span className={css.props(styles.tag)}>Make draggable</span>
          <div />
          <span className={css.props(styles.date)}>2023</span>
        </a>
        <a href="https://projects-refirst.vercel.app/react-text-scaler">
          React Text Scaler
          <span className={css.props(styles.tag)}>Scaling Text for User Interface</span>
          <div />
          <span className={css.props(styles.date)}>2023</span>
        </a>

        <a href="https://projects-refirst.vercel.app/react-magic-card">
          React Magic Card
          <span className={css.props(styles.tag)}>Beautiful slide images</span>
          <div />
          <span className={css.props(styles.date)}>2023</span>
        </a>
      </div>
    </>
  );
};

export default Page;
