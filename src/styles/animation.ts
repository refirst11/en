import * as css from "@plumeria/core";

const fadeOut = css.keyframes({
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  },
});

const fadeIn = css.keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  },
});

export const fade = css.viewTransitionClass({
  old: {
    animationName: fadeOut,
    animationDuration: '1.12s',
  },
  new: {
    animationName: fadeIn,
    animationDuration: '1.12s',
  },
});
