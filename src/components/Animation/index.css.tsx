'use client';

import { ReactNode } from 'react';
import useFiremotion from 'firemotion';
import Style, { max_lg } from 'typedcssx';

type AnimationProps = {
  children: ReactNode;
};

const Animation = ({ children }: AnimationProps): JSX.Element => {
  const animate = useFiremotion(styles.base, [styles.entry, styles.exit], 0.48);
  return <main className={animate}>{children}</main>;
};

const styles = Style.create({
  base: {
    [max_lg]: {
      padding: '120px 0',
    },
    opacity: 1,
    clipPath: 'circle(150% at 50% 50%)',
    transition: 'all 1s',
  },

  entry: {
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)',
  },

  exit: {
    opacity: 0,
    transition: 'all 0.4s',
    clipPath: 'circle(0% at 50% 50%)',
  },
});

export default Animation;
