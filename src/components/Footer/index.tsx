import { JSX } from 'react';
import { css } from '@plumeria/core';
import { breakpoints } from 'lib/mediaQuery';

const Footer = (): JSX.Element => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <footer className={css.props(styles.footer_main)}>
      <div className={css.props(styles.footer_container)}>
        <div className={css.props(styles.footer_text)}>{year + ' © Refirst.'}</div>
        <a href="https://github.com/refirst11">Github</a>
      </div>
    </footer>
  );
};

export default Footer;

const styles = css.create({
  footer_text: {
    position: 'relative',
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
    userSelect: 'none',
    [breakpoints.md]: {
      left: 24,
    },
  },

  footer_main: {
    position: 'absolute',
    right: 64,
    bottom: 20,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 506,
    height: 80,
    [breakpoints.md]: {
      right: 24,
      width: 'auto',
    },
  },

  footer_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
