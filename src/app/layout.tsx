import Header from 'components/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Instrument_Sans } from 'next/font/google';
import { ServerCSS } from '@plumeria/next';
import 'styles/global';
import { Set } from './set-xy';

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

export default function RootLayout({ children }: RootLayoutProps) {
  const font = playfair.className;

  return (
    <>
      <Set />
      <html lang="en">
        <head>
          <ServerCSS />
        </head>
        <body className={font}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
