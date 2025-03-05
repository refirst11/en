import { css } from '@plumeria/core';

const oldTransition = css.keyframes({
  from: {
    opacity: 1,
    scale: 1,
  },
  to: {
    opacity: 0,
    scale: 0,
  },
});

const newTransition = css.keyframes({
  from: {
    opacity: 0,
    scale: 0,
  },
  to: {
    opacity: 1,
    scale: 1,
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
    transformOrigin: 'var(--click-x) var(--click-y)',
    animation: 'ease-in forwards',
    animationName: oldTransition,
    animationDuration: '0.2s',
  },
  [css.pseudo.viewTransitionNew(newTransition)]: {
    transformOrigin: 'var(--click-x) var(--click-y)',
    animation: 'ease-out forwards',
    animationName: newTransition,
    animationDuration: '0.4s',
  },
});
