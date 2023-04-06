import useBottomActive from 'hooks/useBottomActive';
import { Fragment } from 'react';
import styles from './styles';
import { IoIosArrowRoundUp } from 'react-icons/io';

const ScrollToTop = () => {
  const { isBottomActive } = useBottomActive(1);
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
        className={`ReturnTopPosition rotateCircle ${isBottomActive ? 'isBottom' : 'isNotBottom'}`}
      >
        <IoIosArrowRoundUp size={18} />
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ScrollToTop;
