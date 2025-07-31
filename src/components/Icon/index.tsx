import { css, ps } from '@plumeria/core';
import { rotation } from './animation';
import { breakpoints } from 'lib/mediaQuery';
const styles = css.create({
  image: {
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: -1,
    display: 'block',
    borderRadius: '50%',
    viewTransitionName: 'none',
    [ps.hover]: {
      animationName: rotation,
      animationDuration: '0.5s',
    },
    [breakpoints.md]: {
      top: 30,
      right: 'auto',
      left: 0,
    },
  },
});

export const Icon = () => {
  return <img className={css.props(styles.image)} width={160} height={160} src="/icon.png" alt="static" />;
};
