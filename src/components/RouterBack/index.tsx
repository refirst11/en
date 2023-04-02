'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

const RouterBack = () => {
  const router = useRouter();

  return (
    <button className="router_back">
      <IoIosArrowRoundBack size={24} onClick={router.back} />
    </button>
  );
};

export default RouterBack;
