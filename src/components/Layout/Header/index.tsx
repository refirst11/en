'use client';

import { usePathname } from 'next/navigation';
import isCurrentLink from '@/lib/isCurrentLink';
import Link from 'next/link';
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  const pathname = usePathname();
  const Headers: { href: string; name: string }[] = [
    {
      href: '/',
      name: 'About',
    },
    {
      href: '/posts',
      name: 'Posts',
    },
  ];

  return (
    <header className={styles.header__main}>
      {!pathname.includes('posts/') && (
        <nav className={styles.header__nav}>
          <ul className={styles.header__ul}>
            {Headers.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link_container} ${isCurrentLink(href, pathname) && styles.after_color}`}
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
