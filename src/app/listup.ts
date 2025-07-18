import { css, ps, px } from '@plumeria/core';

const MD = css.media.maxWidth(800);

export const styles = css.create({
  list: {
    position: 'relative',
    top: 40,
    width: 'fit-content',
    [px('& a', ps.hover)]: {
      background: '#eeeeee',
    },
    [MD]: {
      width: '100%',
      '& a': {
        width: '100%',
      },
    },
  },

  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 520,
    padding: '16px',
    fontWeight: '600',
    color: 'black',
    listStyle: 'none',
    borderRadius: 12,
    '& div': {
      position: 'relative',
      top: 2,
      flex: 1,
      height: '1px',
      margin: '0 8px',
      background: '#d9d9d9',
    },
  },

  tag: {
    marginLeft: 3,
    fontWeight: '400',
    color: 'gray',
    [MD]: {
      display: 'none',
    },
  },
  date: {
    marginLeft: 4,
    fontWeight: '400',
    color: 'gray',
  },
});
