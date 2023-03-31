import { ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const pathname = usePathname();
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
        <meta name="author" content="@sou" />
        <meta property="og:site_name" content="su-pull" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={`https://su-pull.net${pathname}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pull1102" />
        <meta name="twitter:creator" content="@pull1102" />
      </Head>
      {!pathname.includes('/posts/') && pathname !== '/mail' && <Header />}
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
