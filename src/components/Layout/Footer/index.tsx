import Link from 'next/link';
import styles from './styles.module.scss';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import ExternalLink from 'components/ExternalLink';

const Footer = (): JSX.Element => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>
        <div className={styles.footer_text}>{year + ' © S.watanabe.'}</div>
        <div className={styles.footer_icon}>
          <a href="https://github.com/su-pull">
            <RiGithubFill size={22} />
          </a>
          <Link href="/mail">
            <HiOutlineMail size={22} />
          </Link>
          <a href="/feed.xml">
            <HiRss size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
