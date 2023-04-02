'use client';
import { ReactNode } from 'react';
import useLayoutAdjuster from 'hooks/useLayoutAdjuster';

type AnimateProps = {
  children: ReactNode;
  className?: string;
};

const Animate = ({ children, className }: AnimateProps): JSX.Element => {
  const { ref, isToggleClass } = useLayoutAdjuster('layout_center_content', 'layout_top_content');

  return (
    <main ref={ref} className={`pages_root ${isToggleClass} ${className}`}>
      {children}
    </main>
  );
};

export default Animate;
