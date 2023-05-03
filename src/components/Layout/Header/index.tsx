import Text from 'components/Layout/Text';
import { Fragment, useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.scss';
import { RiQuillPenLine, RiHome4Line } from 'react-icons/ri';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState('');

  const Headers: { name: string; href: string; icon: JSX.Element }[] = useMemo(
    () => [
      {
        name: 'Posts',
        href: '/posts',
        icon: <RiQuillPenLine className={styles.icon_position} size={12} />,
      },
      {
        name: 'Home',
        href: '/',
        icon: <RiHome4Line className={styles.icon_position} size={12} />,
      },
    ],
    []
  );

  return (
    <Fragment>
      <header className={styles.header__main}>
        <Text />
        <nav className={styles.header__nav}>
          <ul className={styles.header__ul}>
            {Headers.map(({ name, href, icon }) => (
              <li
                key={href}
                onMouseEnter={() => {
                  setIsHover(href);
                }}
                onMouseLeave={() => setIsHover('')}
              >
                <Link
                  href={href}
                  className={`${styles.link_container} ${isCurrentLink(href, pathname) && styles.after_color}`}
                >
                  {icon} {name}
                </Link>
                <AnimatePresence>
                  {isHover === href && (
                    <motion.div
                      layoutId="shadow"
                      className={styles.shadow}
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
    </Fragment>
  );
};

export default Header;
