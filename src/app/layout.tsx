import 'styles/globals.scss';
import Provider from 'components/Animation/Provider';
import StyledJsxRegistry from './registry';
import Adjuster from 'components/Adjuster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Adjuster>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Adjuster>
        </Provider>
      </body>
    </html>
  );
}
