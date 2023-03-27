'use client';

import { useEffect, useState } from 'react';

const useEndScroll = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const Value = window.scrollY;
    const bodyHeight = document.body.clientHeight; // bodyの高さを取得
    const windowHeight = window.innerHeight; // windowの高さを取得
    const bottomP = bodyHeight - windowHeight; // ページ最下部までスクロールしたかを判定するための位置を計算
    const current = window.pageYOffset;
    const scrollWindow = () => {
      if (bottomP + 65 <= current || Value === 0) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener('scroll', scrollWindow);
  }, [isHeaderActive]);

  return { isHeaderActive };
};

export default useEndScroll;
