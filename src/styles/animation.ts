import { css } from '@plumeria/core';

const oldTransition = css.keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 1,
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

export { oldTransition, newTransition };

export const animation = css.create({
  next: {
    viewTransitionName: newTransition,
  },
  old: {
    viewTransitionName: oldTransition,
  },
});
