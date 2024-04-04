'use client'

import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/Layout';
import styles from './styles.module.scss';
import { useAnimation } from 'lib/clix'

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <Layout>
      <Analytics mode={'production'} />
      <main className={styles.pages_root}>{children}</main>
    </Layout>
  );
};

export default AppProvider;
