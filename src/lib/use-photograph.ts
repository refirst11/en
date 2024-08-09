import { useRef, useEffect, useState } from 'react';

export const usePhotograph = (attach: string) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const i = imageRef.current as HTMLImageElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
      }
    );
    observer.observe(i);

    return () => {
      observer.unobserve(i);
    };
  }, [imageRef]);

  useEffect(() => {
    if (!imageRef.current) return;

    if (isVisible) {
      imageRef.current.classList.add(attach);
    } else {
      imageRef.current.classList.remove(attach);
    }
  }, [isVisible, attach]);

  return imageRef;
};
