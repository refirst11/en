import { css, ps } from '@plumeria/core';

const MD = css.media.maxWidth(768);

export const styles = css.create({
  header_main: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  header_nav: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
    width: 'max-content',
    height: 220,
    [MD]: {
      top: 30,
      right: 16,
      height: 18,
    },
  },

  header_ul: {
    display: 'flex',
    margin: 0,
    borderBottom: 'solid 1px rgb(233, 233, 233)',
  },

  link_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
    [ps.hover]: {
      color: '#515151',
      textDecoration: 'underline',
    },
  },

  after_color: {
    color: '#515151',
    pointerEvents: 'none',
  },
});
