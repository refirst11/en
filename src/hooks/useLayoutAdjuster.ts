import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
const useLayoutAdjuster = (lowCss: string, highCss: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isToggleClass, setIsToggleClass] = useState('layout_center_content');
  const pathname = usePathname();
  useEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsToggleClass(isContentWindow ? lowCss : highCss);
  }, [ref.current?.offsetHeight, pathname, lowCss, highCss]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
