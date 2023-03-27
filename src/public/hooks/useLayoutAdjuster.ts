import { useEffect, useRef, useState } from 'react';

const useLayoutAdjuster = (lowContent: string, highContent: string) => {
  const ref = useRef<HTMLElement>(null);
  const [isNewClass, setIsNewClass] = useState('');

  useEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsNewClass(isContentWindow ? lowContent : highContent);
  }, [ref, isNewClass, lowContent, highContent]);

  return { ref, isNewClass };
};

export default useLayoutAdjuster;
