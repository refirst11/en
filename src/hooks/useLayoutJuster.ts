import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import useSWRInfinite from 'swr/infinite';
import getKey from 'lib/getKey';
import PostsData from 'types/PostsData';

const useLayoutAdjuster = () => {
  const [isToggleClass, setIsToggleClass] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { data } = useSWRInfinite<PostsData>(getKey, {
    revalidateFirstPage: false,
  });
  useEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    return setIsToggleClass(isContentWindow);
  }, [pathname, data]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
