'use client';

import { ReactNode } from 'react';
import useFitter, { Main } from 'react-page-fitter';
import { usePathname } from 'next/navigation';

type AdjusterProps = {
  children: ReactNode;
};

const Adjuster = ({ children }: AdjusterProps): JSX.Element => {
  const isFit = useFitter();
  const pathname = usePathname();
  return (
    <>
      {isFit !== undefined && (
        <Main
          className={`pages_root ${pathname.includes('/posts/') && 'slug_margin_top'}`}
          classFitIn="fit_in"
          classFitOut="fit_out"
        >
          {children}
        </Main>
      )}
    </>
  );
};

export default Adjuster;
