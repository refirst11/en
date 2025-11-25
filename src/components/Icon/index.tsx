'use client';

import { usePathname } from 'next/navigation';
import { css } from '@plumeria/core';
import { Link } from 'next-link-transitions';
import { breakpoints } from 'lib/mediaQuery';
import { useState } from 'react';
import { scaling } from './animation';
import { transition } from 'styles/animation';

const styles = css.create({
  top: {
    position: 'absolute',
    top: '50%',
    marginTop: -130,
    transition: '0.8s ease',
  },
  article: {
    top: -28,
    left: -50,
    scale: 0.56,
    [breakpoints.md]: {
      top: -45,
      left: -45,
      scale: 0.32,
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
  image: {
    position: 'absolute',
    top: 26,
    left: 0,
    zIndex: 1,
    display: 'block',
    borderRadius: '50%',
    transition: '0.8s ease',
    viewTransitionName: 'none',
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
