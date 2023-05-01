import 'styles/globals.scss';
import 'styles/mobile.scss';
import AppProvider from 'components/AppProvider';
import StyledJsxRegistry from './registry';
import PageRoot from 'components/PageRoot';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  icons: {
    icon: '/alum.ico',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export const fetchCache = 'force-cache';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          <AppProvider>
            <PageRoot>{children}</PageRoot>
          </AppProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
