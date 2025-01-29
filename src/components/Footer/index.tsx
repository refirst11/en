import styles from './styles.module.scss';
import { JSX } from 'react';

const Footer = (): JSX.Element => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>
        <div className={styles.footer_text}>{year + ' © Refirst.'}</div>
        <div className={styles.footer_icon}>
          <a href="https://github.com/refirst11">Github</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
