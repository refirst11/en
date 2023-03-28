'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import useLayoutAdjuster from 'hooks/useLayoutAdjuster';
import { usePathname } from 'next/navigation';

type AnimateProps = {
  children: ReactNode;
  className?: string;
};

const Animate = ({ children, className }: AnimateProps): JSX.Element => {
  const { ref, isNewClass } = useLayoutAdjuster('layout_center_content', 'layout_top_content');
  const pathname = usePathname();
  return (
    <motion.main
      ref={ref}
      key={pathname}
      className={`pages_root ${isNewClass} ${className}`}
      initial={{ opacity: 0, scale: 0.92, x: -600 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.92, x: 600 }}
      transition={{ duration: 1.18 }}
    >
      {children}
    </motion.main>
  );
};
// transition context--
// 0.14 5~11 0.12?
// 2    11~5
export default Animate;
