'use client';
import { useEffect } from 'react';

export const Set = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--click-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--click-y', `${e.clientY}px`);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  return null;
};
