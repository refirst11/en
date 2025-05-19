import { css } from '@plumeria/core';

const MD = css.media.maxWidth(768);

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
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
  },
  [css.pseudo.fn.viewTransitionNew(newTransition)]: {
    animationName: newTransition,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
  },
  pre: {
    width: 480,
    padding: 20,
    margin: '0 0 32px 0',
    overflow: 'auto',
    borderRadius: 4,
    boxShadow: '0 0 2px -0.5px rgb(0 0 0 / 0.4)',
    transition: 'all 0.8s',
    [MD]: {
      width: '100%',
      overflow: 'auto',
    },
    '& span': {
      fontSize: 12,
    },
  },

  code: {
    fontFamily: "Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Liberation Mono', 'Courier New', monospace",
  },

  '*': {
    boxSizing: 'border-box',
  },

  html: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    [MD]: {
      WebkitTextSizeAdjust: 'none',
    },
  },

  body: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '480px',
    minHeight: '100vh',
    margin: '0 auto',
    fontSize: '14px',
    color: 'rgb(55 65 81)',
    textAlign: 'center',
    wordBreak: 'break-all',
    backgroundColor: '#fffffe',
    [MD]: {
      width: '100%',
      padding: '0 24px',
      fontSize: 12,
    },
  },

  main: {
    position: 'absolute',
    top: 200,
    width: 480,
    textAlign: 'left',
    [MD]: {
      top: 40,
      width: '100%',
      padding: '0 24px',
      transition: 'all 0.7s',
      opacity: 1,
    },
    '& li': {
      margin: '8px 16px',
      listStyle: 'disc',
    },
  },

  button: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },

  a: {
    color: 'rgb(117, 117, 117)',
    textDecoration: 'none',
  },

  ul: {
    padding: 0,
  },

  li: {
    listStyle: 'none',
  },

  p: {
    padding: 8,
    margin: 0,
    lineHeight: 1.68,
    whiteSpace: 'pre-wrap',
  },

  h1: {
    fontSize: 20,
    fontWeight: 'normal',
    [MD]: {
      fontSize: 18,
    },
  },

  h2: {
    width: 'fit-content',
    height: 'fit-content',
    fontSize: 18,
    fontWeight: 'normal',
    color: 'rgb(117, 117, 117)',
    [MD]: {
      fontSize: 16,
    },
  },
});
