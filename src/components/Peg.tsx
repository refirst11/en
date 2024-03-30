'use client'

import { ReactNode } from 'react'
import { useClix } from 'lib/clix'
import { useAnimation } from 'lib/anima'
import styles from './styles.module.scss'

type PegProp = {
  children: ReactNode;
};

const anima = useAnimation(styles.base, [styles.init, styles.exit], 0.5)
const Peg = ({ children }: PegProp): JSX.Element => {
  return (
    <p className={anima}>
      {children}
    </p>
  );
};

export default Peg;
