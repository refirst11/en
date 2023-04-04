import 'styles/globals.scss';
import 'styles/mobile.scss';
import AppProvider from 'components/AppProvider';
import StyledJsxRegistry from './registry';
import Adjuster from 'components/Adjuster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledJsxRegistry>
          <AppProvider>
            <Adjuster>{children}</Adjuster>
          </AppProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
