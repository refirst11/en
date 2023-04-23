'use client';

import { ReactNode } from 'react';
import useFitter, { Main } from 'react-page-fitter';

type AdjusterProps = {
  children: ReactNode;
};

const Adjuster = ({ children }: AdjusterProps): JSX.Element => {
  const isFit = useFitter();

  return (
    <>
      {isFit !== undefined && (
        <Main className="pages_root" classFitIn="fit_in" classFitOut="fit_out">
          {children}
        </Main>
      )}
    </>
  );
};

export default Adjuster;
