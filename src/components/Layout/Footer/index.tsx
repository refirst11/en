import Link from 'next/link';
import { Fragment } from 'react';
import styles from './styles.module.scss';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';

const Footer = (): JSX.Element => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <Fragment>
      <footer className={styles.footer_main}>
        <div className={styles.footer_container}>
          <div className={styles.footer_text}>{[year, ' © S.watanabe. license MIT']}</div>
          <div className={styles.footer_icon}>
            <a href="https://github.com/su-pull" target="_blank">
              <RiGithubFill size={22} />
            </a>
            <Link href="/mail" prefetch={false}>
              <HiOutlineMail size={22} />
            </Link>
            <a href="/feed.xml" target="_blank">
              <HiRss size={22} />
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
