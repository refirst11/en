'use client';
import { ReactNode } from 'react';
import useLayoutAdjuster from 'hooks/useLayoutAdjuster';
import { usePathname } from 'next/navigation';

type AnimateProps = {
  children: ReactNode;
};

const Animate = ({ children }: AnimateProps): JSX.Element => {
  const { ref, isToggleClass } = useLayoutAdjuster('layout_center_content', 'layout_top_content');
  const pathname = usePathname();
  return (
    <main ref={ref} className={`pages_root ${isToggleClass} ${pathname.includes('/posts/') && 'slug_margin_top'}`}>
      {children}
    </main>
  );
};

export default Animate;
