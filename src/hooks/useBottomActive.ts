import { useEffect, useState } from 'react';

const useBottomActive = (activePoint: number) => {
  const [isBottomActive, setIsBottomActive] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      const contentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const currentScroll = window.pageYOffset;
      const distanceFromBottom = contentHeight - (currentScroll + windowHeight);

      if (distanceFromBottom <= activePoint) {
        setIsBottomActive(true);
      } else {
        setIsBottomActive(false);
      }
    };
    window.addEventListener('scroll', scrollWindow);
    return () => window.removeEventListener('scroll', scrollWindow);
  }, [activePoint]);

  return { isBottomActive };
};

export default useBottomActive;
