'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import styles from 'styles/components/RouterBack';

const RouterBack = () => {
  const router = useRouter();

  return (
    <>
      <button className="router_back">
        <IoIosArrowRoundBack size={24} onClick={router.back} />
      </button>
      <style jsx>{styles}</style>
    </>
  );
};

export default RouterBack;
