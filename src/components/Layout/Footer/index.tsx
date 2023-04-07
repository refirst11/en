import Link from 'next/link';
import { Fragment } from 'react';
import styles from './styles';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import License from 'components/Layout/License';

const Footer = (): JSX.Element => {
  return (
    <Fragment>
      <footer className="footer_main">
        <div className="footer_container">
          <div className="footer_text">
            {'2023 © '}
            <License>
              <u className="under"> {'su pu'}</u>
            </License>
          </div>
          <div className="footer_icon">
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
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Footer;
