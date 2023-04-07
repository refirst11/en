import Text from 'components/Layout/Text';
import { Fragment, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles';
import { RiQuillPenLine, RiHome4Line } from 'react-icons/ri';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState('');

  const Headers: { name: string; href: string; icon: JSX.Element }[] = useMemo(
    () => [
      {
        name: 'Posts',
        href: '/posts',
        icon: <RiQuillPenLine className="icon_position" size={12} />,
      },
      {
        name: 'Home',
        href: '/',
        icon: <RiHome4Line className="icon_position" size={12} />,
      },
    ],
    []
  );

  return (
    <Fragment>
      <header>
        <Text />
        <nav className="header__nav">
          <ul className="header__ul">
            {Headers.map(({ name, href, icon }) => (
              <li
                key={href}
                onMouseEnter={() => {
                  setIsHover(href);
                }}
                onMouseLeave={() => setIsHover('')}
              >
                <Link href={href} className={`link_container ${isCurrentLink(href, pathname) && 'after_color'}`}>
                  {icon} {name}
                </Link>
                <AnimatePresence>
                  {isHover === href && (
                    <motion.div
                      layoutId="Shadow"
                      className="Shadow"
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Header;
