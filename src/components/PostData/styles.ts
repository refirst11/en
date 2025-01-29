import { css } from '@plumeria/core';

export const styles = css.create({
  back: {
    position: 'absolute',
    right: 0,
    marginTop: -20,
  },

  post: {
    position: 'relative',
    transform: 'translateY(-100px)',
    [css.media.max_md]: {
      transform: 'none',
    },
  },

  color_h1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'normal',
    color: 'rgb(0, 160, 185)',
  },
});
