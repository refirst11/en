'use client';

import { usePathname } from 'next/navigation';
import { css } from '@plumeria/core';
import { ps } from 'lib/pseudos';
import { rotation } from './animation';

const styles = css.create({
  top: {
    position: 'absolute',
    top: '50%',
    marginTop: -130,
    transition: '0.8s ease',
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
