'use client';

import { usePathname } from 'next/navigation';
import * as css from '@plumeria/core';
import { Link } from 'next-link-transitions';
import { breakpoints } from 'lib/mediaQuery';
import { useState } from 'react';
import { scaling } from './animation';
import { transition } from 'styles/animation';

const styles = css.create({
  image: {
    position: 'absolute',
    top: 26,
    left: 0,
    zIndex: 1,
    borderRadius: '50%',
    transition: '0.8s ease',
    viewTransitionName: 'none',
    [breakpoints.md]: {
      top: -10,
      left: 4,
      scale: 0.75,
    },
  },
  top: {
    position: 'absolute',
    top: '50%',
    marginTop: -130,
    scale: 1,
    transition: '0.8s ease',
    [breakpoints.md]: {
      top: '50%',
      left: 0,
      scale: 1,
    },
  },
  article: {
    top: -30,
    left: -48,
    scale: 0.4,
    [breakpoints.md]: {
      top: -44,
      left: -32,
      scale: 0.3,
    },
  },
  sentence: {
    display: 'block',
    marginTop: -54,
    marginLeft: -40,
    color: 'initial',
    cursor: 'help',
    [breakpoints.md]: {
      marginTop: -80,
      marginLeft: 140,
      whiteSpace: 'nowrap',
    },
  },
  opacity: {
    display: 'none',
    opacity: 0,
  },
  animation: {
    animationName: scaling,
    animationDuration: '2s',
  },
});

export const Icon = () => {
  const pathname = usePathname();
  const [state, setState] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    // e.stopPropagation();

    if (state) {
      return;
    }

    setState(true);
  };

  return (
    <Link href="/" viewTransitionName={css.props(transition.name)}>
      <img
        className={css.props(
          styles.image,
          state && styles.animation,
          pathname === '/' && styles.top,
          pathname.includes('personal/') && styles.article,
        )}
        width={160}
        height={160}
        src="/icon.png"
        alt="static"
        onAnimationEnd={() => setState(false)}
      />
      <span
        onClick={(e) => handleClick(e as unknown as MouseEvent)}
        className={css.props(styles.sentence, pathname !== '/' && styles.opacity)}
      >
        hyper happy {state ? '!' : '?'}
      </span>
    </Link>
  );
};
