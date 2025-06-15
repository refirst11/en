import { JSX } from 'react';
import { styles } from './styles';
import { css } from '@plumeria/core';

const Footer = (): JSX.Element => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <footer className={css.props(styles.footer_main)}>
      <div className={css.props(styles.footer_container)}>
        <div className={css.props(styles.footer_text)}>{year + ' © Refirst.'}</div>
        <div className={css.props(styles.footer_icon)}>
          <a href="https://github.com/refirst11">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
