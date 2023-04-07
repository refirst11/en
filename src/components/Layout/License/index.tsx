import { useState, ReactNode } from 'react';
import styles from './styles';

type LicenseProps = {
  children: ReactNode;
};

const License = ({ children }: LicenseProps) => {
  const [show, setShow] = useState(false);
  return (
    <span onMouseEnter={() => setTimeout(() => setShow(true), 1400)} onMouseLeave={() => setShow(false)}>
      {children}
      <span className={show ? 'visible_license' : 'hide_license'}>
        The source code of this site is licensed under the MIT License.
      </span>
      <style jsx>{styles}</style>
    </span>
  );
};

export default License;
