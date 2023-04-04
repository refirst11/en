'use client';

import { ReactNode } from 'react';
import useLayoutJuster from 'hooks/useLayoutJuster';
import { usePathname } from 'next/navigation';

type AnimateProps = {
  children: ReactNode;
};

const Adjuster = ({ children }: AnimateProps): JSX.Element => {
  const { ref, isToggleClass } = useLayoutJuster();
  const isClass = isToggleClass ? 'layout_center_content' : 'layout_top_content';
  const pathname = usePathname();
  return (
    <main ref={ref} className={`pages_root ${isClass} ${pathname.includes('/posts/') && ''}`}>
      {children}
    </main>
  );
};

export default Adjuster;
