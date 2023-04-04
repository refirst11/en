import { useInsertionEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
const useLayoutAdjuster = (lowCss: string, highCss: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isToggleClass, setIsToggleClass] = useState('');
  const pathname = usePathname();
  useInsertionEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsToggleClass(isContentWindow ? lowCss : highCss);
  }, [ref.current?.offsetHeight, pathname, lowCss, highCss]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
