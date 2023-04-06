'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';
import styles from './styles.module.scss';
import Link from 'next/link';

const RouterBack = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {pathname.includes('/posts/') ? (
        <Link href="/posts" className={styles.post_to_posts}>
          <IoIosArrowRoundBack size={24} />
        </Link>
      ) : (
        <button className={styles.mail_to_posts}>
          <IoIosArrowRoundBack size={24} onClick={router.back} />
        </button>
      )}
    </>
  );
};

export default RouterBack;
