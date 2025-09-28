'use client';

import { usePathname } from 'next/navigation';
import { css } from '@plumeria/core';
import { ps } from 'lib/pseudos';
import { rotation } from './animation';
import { breakpoints } from 'lib/mediaQuery';

const styles = css.create({
  top: {
    marginTop: 350,
    transition: '0.8s ease',
    [breakpoints.md]: {
      marginTop: 128,
    },
  },
  image: {
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: -1,
    display: 'block',
    borderRadius: '50%',
    transition: '0.8s ease',
    viewTransitionName: 'none',
    [ps.hover]: {
      animationName: rotation,
      animationDuration: '0.5s',
    },
    [breakpoints.md]: {
      top: 30,
      right: 'auto',
      left: 0,
    },
  },
});

export const Icon = () => {
  const pathname = usePathname();
  return (
    <img
      className={css.props(styles.image, pathname === '/' && styles.top)}
      width={160}
      height={160}
      src="/icon.png"
      alt="static"
    />
  );
};
