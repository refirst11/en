'use client';

import { ReactNode } from 'react';
import useFiremotion from 'firemotion';
import elter, { max_lg } from 'elter';

type AnimationProps = {
  children: ReactNode;
};

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 0.48);
  return <main className={animate}>{children}</main>;
};

const styles = elter.create({
  base: {
    [max_lg]: {
      padding: '120px 0',
    },
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: 'all 0.5s ease-in-out',
  },

  entry: {
    opacity: 0,
    clipPath: 'inset(100% 0% 0% 0%)',
  },

  exit: {
    opacity: 0,
    clipPath: 'inset(100% 0% 0% 0%)',
    transition: 'all 0.17s linear',
  },
});

export default Animation;
