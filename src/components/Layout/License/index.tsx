'use client';

import { useState, ReactNode } from 'react';
import styles from './styles.module.scss';

type LicenseProps = {
  children: ReactNode;
};

const License = ({ children }: LicenseProps) => {
  const [show, setShow] = useState(false);
  return (
    <span
      className={styles.under}
      onMouseEnter={() => setTimeout(() => setShow(true), 1400)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <span className={show ? styles.visible_license : styles.hide_license}>
        The source code of this site is licensed under the MIT License.
      </span>
    </span>
  );
};

export default License;
