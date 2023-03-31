import useHeaderScroll from 'hooks/useHeaderScroll';
import { Fragment } from 'react';
import styles from 'styles/components/ReturnStyles';
import { BiUpArrowAlt } from 'react-icons/bi';

const ScrollToTop = () => {
  const { isHeaderActive } = useHeaderScroll(1);
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
        className={`ReturnTopPosition rotateCircle ${isHeaderActive ? 'NoActive' : 'Active'}`}
      >
        <BiUpArrowAlt size={18} />
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ScrollToTop;
