import 'styles/globals.scss';
import Provider from 'components/Animation/Provider';
import StyledJsxRegistry from './registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StyledJsxRegistry>
            <main className="pages_root">{children}</main>
          </StyledJsxRegistry>
        </Provider>
      </body>
    </html>
  );
}
