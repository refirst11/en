import * as css from "@plumeria/core";
import { breakpoints } from 'lib/mediaQuery';

export const styles = css.create({
  wordline: {
    transform: 'translate(-140px, -20px)',
    [breakpoints.md]: {
      transform: 'translate(-80px, -20px)',
    },
  },

  list: {
    position: 'absolute',
    top: 200,
    right: '0',
    left: '0',
    width: 'fit-content',
    margin: '0 auto',
    marginTop: 'auto',
    [breakpoints.md]: {
      position: 'relative',
      top: 20,
      width: '100%',
      '& a': {
        width: '100%',
      },
    },
    ['& a:hover']: {
      background: '#eeeeee',
      opacity: 0.8,
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
    [breakpoints.md]: {
      display: 'none',
    },
  },
  date: {
    marginLeft: 4,
    fontWeight: '400',
    color: 'gray',
  },
});
