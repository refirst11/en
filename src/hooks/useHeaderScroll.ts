'use client';

import { useEffect, useState } from 'react';

const useHeaderScroll = (activePoint: number) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      const initializeValue = window.scrollY;
      if (initializeValue > activePoint) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener('scroll', scrollWindow);
  }, [activePoint]);

  return { isHeaderActive };
};

export default useHeaderScroll;
