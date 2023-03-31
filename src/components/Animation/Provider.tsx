'use client';

import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import GlobalFont from 'components/Font';
import fetcher from 'libs/fetcher';
import Layout from 'components/Layout';

type Provider = {
  children: ReactNode;
};

const Animate = ({ children }: Provider): JSX.Element => {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalFont />
      <Layout>{children}</Layout>
    </SWRConfig>
  );
};

export default Animate;
