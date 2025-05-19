import { css } from '@plumeria/core';

const MD = css.media.maxWidth(768);

export const styles = css.create({
  footer_text: {
    position: 'relative',
    fontSize: 12,
    color: 'gray',
    textAlign: 'left',
    userSelect: 'none',
    [MD]: {
      left: 24,
    },
  },

  footer_main: {
    position: 'absolute',
    right: 64,
    bottom: 20,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 800,
    height: 80,
    [MD]: {
      right: 36,
      width: 'auto',
    },
  },

  footer_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  footer_icon: {
    display: 'flex',
    gap: 12,
  },
});
