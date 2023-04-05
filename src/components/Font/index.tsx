import { Playfair_Display, Source_Serif_Pro } from 'next/font/google';

const other = Playfair_Display({ subsets: ['latin'], weight: '400' });
const source = Source_Serif_Pro({ subsets: ['latin'], weight: '400' });
const GlobalFont = (): JSX.Element => {
  return (
    <style jsx global>
      {`
        html {
          font-family: ${other.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
        code {
          font-family: ${source.style.fontFamily}, 'ui-monospace', 'monospace';
        }
        p code {
          font-family: ${other.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
        input {
          font-family: ${other.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
        textarea {
          font-family: ${other.style.fontFamily}, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 'Helvetica Neue';
        }
      `}
    </style>
  );
};

export default GlobalFont;
