import useHeaderScroll from 'hooks/useHeaderScroll';
import { Fragment } from 'react';
import styles from 'styles/components/ReturnStyles';

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
        ↑
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ScrollToTop;
