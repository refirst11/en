'use client';

import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import { Link } from 'next-view-transitions';
import { JSX } from 'react';
import { styles } from './styles';
import { cx } from '@plumeria/core';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const Headers: { href: string; name: string }[] = [
    {
      name: 'about',
      href: '/',
    },
    {
      name: 'personal',
      href: '/personal',
    },
    {
      name: 'projects',
      href: '/projects',
    },
  ];

  return (
    <header className={styles.header_main}>
      {!pathname.includes('personal/') && (
        <nav className={styles.header_nav}>
          <ul className={styles.header_ul}>
            {Headers.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cx(styles.link_container, isCurrentLink(href, pathname) && styles.after_color)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
