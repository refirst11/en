import type { JSX, ReactNode } from 'react';
import Layout from '@/components/Layout';

type AppProp = {
  children: ReactNode;
};

const App = ({ children }: AppProp): JSX.Element => {
  return <Layout>{children}</Layout>;
};

export default App;
