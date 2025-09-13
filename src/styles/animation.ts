import { css } from '@plumeria/core';

export const animation = css.create({
  next: {
    viewTransitionName: 'newTransition',
  },
  old: {
    viewTransitionName: 'oldTransition',
  },
});
