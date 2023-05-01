'use client';

import { ReactNode } from 'react';
import useFitter, { Main } from 'react-page-fitter';
import { usePathname } from 'next/navigation';

type AdjusterProps = {
  children: ReactNode;
};

const PageRoot = ({ children }: AdjusterProps): JSX.Element => {
  const pathname = usePathname();
  const isFit = useFitter();
  return (
    <>
      {isFit !== undefined && (
        <Main
          location={pathname}
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

export default PageRoot;
