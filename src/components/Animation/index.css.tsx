'use client';

import { ReactNode } from 'react';
import useFiremotion from 'firemotion';
import { Style } from 'typedcssx';

type AnimationProps = {
  children: ReactNode;
};

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.init, styles.exit], 0.2);
  return <main className={animate}>{children}</main>;
};

const styles = Style.create({
  base: {
    opacity: 1,
    transition: 'all 0.6877777s ease-in-out',
    scale: 1,
  },

  init: {
    opacity: 0,
    scale: 1.1,
  },

  exit: {
    opacity: 0,
    transition: 'all 0.17s linear',
    scale: 1.1,
  },
});

export default Animation;
