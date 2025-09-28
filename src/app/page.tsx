import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { css } from '@plumeria/core';
import { JSX } from 'react';
import { styles } from './listup';

export const metadata: Metadata = generateSEOData({ title: 'Refirst' });

const Page = (): JSX.Element => {
  return <div className={css.props(styles.list, styles.wordline)}></div>;
};

export default Page;
