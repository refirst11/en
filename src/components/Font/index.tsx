import { Playfair_Display, Source_Serif_Pro } from 'next/font/google';

const inter = Playfair_Display({ subsets: ['latin'], weight: '400' });
const source = Source_Serif_Pro({ subsets: ['latin'], weight: '400' });
const GlobalFont = (): JSX.Element => {
  return (
    <style jsx global>
      {`
        html {
          font-family: ${inter.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
        code {
          font-family: ${source.style.fontFamily}, 'ui-monospace', 'monospace';
          font-size: 12.4px;
          -webkit-text-size-adjust: none;
        }
        p code {
          font-family: ${inter.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
      `}
    </style>
  );
};

export default GlobalFont;
