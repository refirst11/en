import { css, cx } from '@plumeria/core';

export const listup = {
  list: {
    position: 'relative',
    top: 40,
    width: '480px',
    [cx('& a', css.pseudo.hover)]: {
      background: '#f2efef',
    },
    [css.media.max('width: 800px')]: {
      width: '100%',
      '& a': {
        width: '100%',
      },
    },

    '& a': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 496,
      padding: '16px',
      fontWeight: '600',
      color: 'black',
      listStyle: 'none',
      borderRadius: 12,
    },
    '& a div': {
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
    [css.media.max('width: 800px')]: {
      display: 'none',
    },
  },
  date: {
    marginLeft: 4,
    fontWeight: '400',
    color: 'gray',
  },
};
