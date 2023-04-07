'use client';

import { ReactNode, useRef } from 'react';
import { usePathname } from 'next/navigation';
import useFitter from 'react-pages-fitter';
// import useFitter from 'hooks/useFitter';

type AdjusterProps = {
  children: ReactNode;
};

const Adjuster = ({ children }: AdjusterProps): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const { isFitted } = useFitter(ref);
  const isClass = isFitted ? 'layout_center_content' : 'layout_top_content';
  const pathname = usePathname();
  return (
    <main ref={ref} className={`pages_root ${isClass} ${pathname.includes('/posts/') && 'slug_margin_top'}`}>
      {children}
    </main>
  );
};

export default Adjuster;
