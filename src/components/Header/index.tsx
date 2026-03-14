'use client';

import { usePathname } from 'next/navigation';
import isCurrentLink from 'lib/isCurrentLink';
import { Link } from 'next-link-transitions';
import { JSX } from 'react';
import * as style from '@plumeria/core';
import { breakpoints } from 'lib/mediaQuery';
import { ps } from 'lib/pseudos';
import { transition } from 'styles/animation';

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
    <header className={style.use(styles.header_main, pathname === '/' && styles.top)}>
      <nav className={style.use(styles.header_nav)}>
        {!pathname.includes('personal/') && (
          <ul className={style.use(styles.header_ul)}>
            {Headers.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={style.use(styles.link_container, isCurrentLink(href, pathname) && styles.after_color)}
                viewTransitionName={style.use(transition.name)}
              >
                {name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

const styles = style.create({
  top: {
    top: '50%',
    right: 40,
    marginTop: -150,
    transition: '0.8s ease',
    [breakpoints.md]: {
      right: 0,
    },
  },
  header_main: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    transition: '0.8s ease',
    viewTransitionName: 'none',
  },
  header_nav: {
    position: 'absolute',
    top: 140,
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
    width: 'max-content',
    height: 10,
    [breakpoints.md]: {
      top: 110,
      height: 18,
      marginRight: 24,
    },
  },

  header_ul: {
    display: 'flex',
    margin: 0,
    borderBottom: 'solid 1px rgb(233, 233, 233)',
  },

  link_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
    [ps.hover]: {
      color: '#515151',
      textDecoration: 'underline',
    },
  },

  after_color: {
    color: '#515151',
    pointerEvents: 'none',
  },
});
