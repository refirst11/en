'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import GlobalFont from 'components/Font';
import fetcher from 'lib/fetcher';
import Layout from 'components/Layout';

type Provider = {
  children: ReactNode;
};

const AppProvider = ({ children }: Provider): JSX.Element => {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalFont />
      <Layout>{children}</Layout>
    </SWRConfig>
  );
};

export default AppProvider;
