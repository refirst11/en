'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { Analytics } from '@vercel/analytics/react';
import GlobalFont from 'components/Font';
import fetcher from 'lib/fetcher';
import Layout from 'components/Layout';
import PageRoot from 'components/PageRoot';

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalFont />
      <Analytics mode={'production'} />
      <Layout>
        <PageRoot>{children}</PageRoot>
      </Layout>
    </SWRConfig>
  );
};

export default AppProvider;
