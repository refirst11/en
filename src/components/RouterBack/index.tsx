'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import styles from './styles';

const RouterBack = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <button className={pathname === '/mail' ? 'router_back-form' : 'router_back'}>
        <IoIosArrowRoundBack size={24} onClick={router.back} />
      </button>
      <style jsx>{styles}</style>
    </>
  );
};

export default RouterBack;
