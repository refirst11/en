import Header from 'components/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import '@plumeria/core/stylesheet.css';
import 'styles/global';
import { ServerCSS } from '@plumeria/next';

const geist = Geist({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const geist_mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--geist-mono' });
export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

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
        <ServerCSS />
      </head>
      <body className={font}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
