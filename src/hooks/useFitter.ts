import { RefObject, useState, useInsertionEffect } from 'react';

const useLayoutAdjuster = (ref: RefObject<HTMLElement>) => {
  const [isFitted, setIsFitted] = useState(true);

  useInsertionEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setIsFitted(entry.target.clientHeight < window.innerHeight);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, setIsFitted]);

  return { isFitted };
};

export default useLayoutAdjuster;
