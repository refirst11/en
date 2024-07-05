import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Layout from '@/components/Layout';

type AppProp = {
  children: ReactNode;
};

const App = ({ children }: AppProp): JSX.Element => {
  return (
    <Layout>
      <Analytics mode={'production'} />
      {children}
    </Layout>
  );
};

export default App;
