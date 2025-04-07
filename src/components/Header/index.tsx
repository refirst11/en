'use client';

import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import { Link } from 'next-link-transitions';
import { JSX } from 'react';
import { styles } from './styles';
import { cx } from '@plumeria/core';
import { animation } from 'styles/global';

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
              <Link
                key={href}
                href={href}
                className={cx(styles.link_container, isCurrentLink(href, pathname) && styles.after_color)}
                next={animation.next}
                old={animation.old}
              >
                {name}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
