import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { css } from '@plumeria/core';
import { JSX } from 'react';
import { styles } from './listup';

export const metadata: Metadata = generateSEOData({ title: 'Refirst' });

const Page = (): JSX.Element => {
  return (
    <div className={css.props(styles.list, styles.wordline)}>
      Cherish the feeling
      <br /> you get always fresh forever.
    </div>
  );
};

export default Page;
