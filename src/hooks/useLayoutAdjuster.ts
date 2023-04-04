import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
const useLayoutAdjuster = (lowContent: string, highContent: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isToggleClass, setIsToggleClass] = useState('');
  const pathname = usePathname();
  useEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsToggleClass(isContentWindow ? lowContent : highContent);
  }, [ref.current?.offsetHeight, pathname, lowContent, highContent]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
