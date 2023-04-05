import { ReactNode } from 'react';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import { usePathname } from 'next/navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const pathname = usePathname();
  return (
    <>
      {!pathname.includes('/posts/') && pathname !== '/mail' && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
