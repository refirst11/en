'use client';

import { ReactNode } from 'react';
import { useAnimation } from 'firemotion';
import styles from './styles.module.scss';

type PegProp = {
  children: ReactNode;
};

const Animate = ({ children }: PegProp): JSX.Element => {
  const animate = useAnimation(styles.base, [styles.init, styles.exit], 0.2);

  return <div className={animate}>{children}</div>;
};

export default Animate;
