import * as style from '@plumeria/core';

const fadeOut = style.keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 1,
  },
});

const fadeIn = style.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const longCrossFade = style.viewTransition({
  old: {
    animation: fadeOut,
    animationDuration: '1.12s',
  },
  new: {
    animation: fadeIn,
    animationDuration: '1.12s',
  },
});

export const transition = style.create({
  name: {
    viewTransitionName: longCrossFade,
  },
});
