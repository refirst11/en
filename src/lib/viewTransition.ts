import { css } from '@plumeria/core';

const oldTransition = css.keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const newTransition = css.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const animation = css.create({
  next: {
    viewTransitionName: newTransition,
  },
  old: {
    viewTransitionName: oldTransition,
  },
});

css.global({
  [css.pseudo.fn.viewTransitionOld(oldTransition)]: {
    animationName: oldTransition,
    animationDuration: '0.4s',
    animationTimingFunction: 'ease',
  },
  [css.pseudo.fn.viewTransitionNew(newTransition)]: {
    animationName: newTransition,
    animationDuration: '0.4s',
    animationTimingFunction: 'ease',
  },
});
