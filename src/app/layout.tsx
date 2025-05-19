/* eslint-disable @typescript-eslint/no-require-imports */
import Header from 'components/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Instrument_Sans } from 'next/font/google';
import '@plumeria/core/stylesheet.css';
import 'styles/global';
const { ServerCSS } = require('@plumeria/next');

const playfair = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

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
  const font = playfair.className;

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
