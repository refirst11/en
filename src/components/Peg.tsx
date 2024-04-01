'use client'

import { ReactNode } from 'react'
import { useClix } from 'lib/clix'
import { useAnimation } from 'lib/anima'
import styles from './styles.module.scss'

type PegProp = {
  children: ReactNode;
};

const Peg = ({ children }: PegProp): JSX.Element => {
  return (
    <p className={useClix(styles.base, [styles.init, style.exit], 0.5)}>
      {children}
    </p>
  );
};

export default Peg;
