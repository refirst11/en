import { useEffect, useRef, useState } from 'react';

const useLayoutAdjuster = (lowContent: string, highContent: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isToggleClass, setIsToggleClass] = useState('');

  useEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsToggleClass(isContentWindow ? lowContent : highContent);
  }, [ref.current?.offsetHeight, lowContent, highContent]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
