import Link from 'next/link';
import { Fragment } from 'react';
import styles from 'styles/components/FooterStyles';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import ScrollToTop from 'components/ScrollToTop';

const Footer = (): JSX.Element => {
  return (
    <Fragment>
      <footer className="footer_main">
        <div className="footer_text">
          <br />
          <Link href="/privacy">
            <u>Privacy Policy</u>
          </Link>{' '}
          2020-2023 © su+pu
        </div>
        <ScrollToTop />
        <div className="footer_icon">
          <a href="https://github.com/su-pull" target="_blank">
            <RiGithubFill size={26} />
          </a>
          <Link href="/mail" prefetch={false}>
            <HiOutlineMail size={26} />
          </Link>
          <a href="/atom.xml" target="_blank">
            <HiRss size={26} />
          </a>
        </div>
      </footer>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Footer;
