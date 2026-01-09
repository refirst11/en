import * as css from "@plumeria/core";

const fadeOut = css.keyframes({
  from: { opacity: 1 },
  to: { opacity: 1 },
});

const fadeIn = css.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const longCrossFade = css.viewTransition({
  old: {
    animation: fadeOut,
    animationDuration: '1.12s',
  },
  new: {
    animation: fadeIn,
    animationDuration: '1.12s',
  },
});

export const transition = css.create({
  name: {
    viewTransitionName: longCrossFade,
  },
});
