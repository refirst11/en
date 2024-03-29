"use client"

import { ReactNode } from 'react';
import clix from 'lib/clix
import style from './'

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <p>
      {children}
    </p>
  );
};

export default Layout;