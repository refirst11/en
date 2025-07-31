import { css, ps } from '@plumeria/core';
import { breakpoints } from 'lib/mediaQuery';
import { oldTransition, newTransition } from './animation';

css.global({
  [ps.fn.viewTransitionOld(oldTransition)]: {
    animationName: oldTransition,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
  },
  [ps.fn.viewTransitionNew(newTransition)]: {
    animationName: newTransition,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
  },
  pre: {
    width: 506,
    padding: 20,
    margin: '0 0 32px 0',
    overflow: 'auto',
    borderRadius: 4,
    boxShadow: '0 0 2px -0.5px rgb(0 0 0 / 0.4)',
    transition: 'all 0.8s',
    [breakpoints.md]: {
      width: '100%',
      overflow: 'auto',
    },
    '& span': {
      fontSize: 12,
    },
  },

  code: {
    fontFamily:
      "var(--geist-mono), Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Liberation Mono', 'Courier New', monospace",
  },

  '*': {
    boxSizing: 'border-box',
  },

  html: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    [breakpoints.md]: {
      WebkitTextSizeAdjust: 'none',
    },
  },

  body: {
    position: 'relative',
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 506,
    minHeight: '100vh',
    padding: '80px 0',
    margin: 'auto',
    fontSize: '14px',
    color: 'rgb(55 65 81)',
    textAlign: 'center',
    wordBreak: 'break-all',
    backgroundColor: '#fffffe',
    [breakpoints.md]: {
      width: '100%',
      padding: '0 24px',
      fontSize: 12,
    },
  },

  main: {
    height: 'fit-content',
    textAlign: 'left',
    [breakpoints.md]: {
      width: '100%',
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
    [breakpoints.md]: {
      fontSize: 18,
    },
  },

  h2: {
    width: 'fit-content',
    height: 'fit-content',
    fontSize: 18,
    fontWeight: 'normal',
    color: 'rgb(117, 117, 117)',
    [breakpoints.md]: {
      fontSize: 16,
    },
  },
});
