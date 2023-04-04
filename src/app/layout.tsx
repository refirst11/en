import 'styles/globals.scss';
import 'styles/mobile.scss';
import AppProvider from 'components/AppProvider';
import Adjuster from 'components/Adjuster';
import { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/alum.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <main className="pages_root">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
