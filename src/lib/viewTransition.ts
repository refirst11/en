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
  entry: {
    viewTransitionName: newTransition,
  },
  old: {
    viewTransitionName: oldTransition,
  },
});

css.global({
  [css.pseudo.viewTransitionOld(oldTransition)]: {
    animationName: oldTransition,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease',
  },
  [css.pseudo.viewTransitionNew(newTransition)]: {
    animationName: newTransition,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease',
  },
});
