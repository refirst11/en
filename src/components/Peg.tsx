'use client'

import { ReactNode } from 'react'
import { useAnimation } from 'lib/clix'
import styles from './styles.module.scss'

type PegProp = {
  children: ReactNode;
};

const Peg = ({ children }: PegProp): JSX.Element => {
  return (
    <p className={useClix(styles.base, [styles.init, styles.exit], 0.2)}>
      {children}
    </p>
  );
};

export default Peg;
