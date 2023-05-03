'use client';

import useBottomActive from 'hooks/useBottomActive';
import { Fragment } from 'react';
import styles from './styles.module.scss';
import { IoIosArrowRoundUp } from 'react-icons/io';

const ScrollToTop = () => {
  const { isBottomActive } = useBottomActive(20);
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fragment>
      <button
        onClick={returnTop}
        className={`${styles.ReturnTopPosition} ${styles.rotateCircle} ${
          isBottomActive ? styles.isBottom : styles.isNotBottom
        }`}
      >
        <IoIosArrowRoundUp size={18} />
      </button>
    </Fragment>
  );
};

export default ScrollToTop;
