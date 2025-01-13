'use client';

import { JSX, ReactNode } from 'react';
import useFiremotion from 'firemotion';
import { css } from '@plumeria/core';

type AnimationProps = {
  children: ReactNode;
};

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 0.48);
  return <main className={animate}>{children}</main>;
};

const styles = css.create({
  base: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: 'all 0.5s ease-in-out',
    [css.media.max_lg]: {
      padding: '120px 0',
    },
  },

  entry: {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0,
  },

  exit: {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0,
    transition: 'all 0.17s linear',
  },
});

export default Animation;
