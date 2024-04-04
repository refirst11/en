'use client'

import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/Layout';
import styles from './styles.module.scss';
import useAnimation from 'lib/clix'

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <Layout>
      <Analytics mode={'production'} />
      <main className={useAnimation(styles.pages_root, [styles.init, styles.exit], 0.7)}>{children}</main>
    </Layout>
  );
};

export default AppProvider;
