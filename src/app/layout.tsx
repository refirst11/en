import Header from 'components/Header';
import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import 'styles/global.css';
import Footer from 'components/Footer';
import { Icon } from 'components/Icon';

const geist = Geist({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] });
const geist_mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--geist-mono' });

type RootLayoutProps = {
  children: ReactNode;
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export default function RootLayout({ children }: RootLayoutProps) {
  const font = geist.className + ' ' + geist_mono.variable;

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font}>
        <Header />
        <Icon />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
