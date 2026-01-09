import * as css from "@plumeria/core";
import { breakpoints } from 'lib/mediaQuery';

export const styles = css.create({
  back: {
    position: 'absolute',
    right: 0,
    marginTop: -20,
  },

  post: {
    position: 'relative',
    zIndex: 1,
  },

  spacing: {
    marginBottom: '40px',
    [breakpoints.md]: {
      marginTop: 60,
      marginBottom: 120,
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
