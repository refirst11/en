'use client';

import { ReactNode } from 'react';
import { useAnimation } from 'firemotion';
import styles from './styles.module.scss';

type PegProp = {
  children: ReactNode;
};

const Animation = ({ children }: PegProp): JSX.Element => {
  const animate = useAnimation(styles.base, [styles.init, styles.exit], 0.2);

  return <main className={animate}>{children}</main>;
};

export default Animation;
