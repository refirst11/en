import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import useLayoutAdjuster from 'hooks/useLayoutAdjuster';

type AnimateProps = {
  children: ReactNode;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, scale: 0.92, x: -600 },
  enter: { opacity: 1, scale: 1, x: 0 },
  exit: { opacity: 0, scale: 0.92, x: 600, transition: { duration: 0.18 } },
};

const Animate = ({ children, className }: AnimateProps): JSX.Element => {
  const { ref, isNewClass } = useLayoutAdjuster('layout_center_content', 'layout_top_content');

  return (
    <motion.main
      ref={ref}
      className={`pages_root ${isNewClass} ${className}`}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.main>
  );
};
// transition context--
// 0.14 5~11 0.12?
// 2    11~5
export default Animate;
