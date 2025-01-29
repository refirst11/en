import { css } from '@plumeria/core';

css.global({
  pre: {
    width: 480,
    padding: 20,
    margin: '32px 0',
    overflow: 'auto',
    borderRadius: 4,
    boxShadow: '0 0 2px -0.5px rgb(0 0 0 / 0.4)',
    transition: 'all 0.8s',
    [css.media.max('width: 800px')]: {
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
    [css.media.max_md]: {
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
    [css.media.max_md]: {
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
    [css.media.max_md]: {
      top: 40,
      width: '100%',
      padding: '0 24px',
      opacity: 1,
      transition: 'all 0.7s',
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
    [css.media.max_md]: {
      fontSize: 18,
    },
  },

  h2: {
    width: 'fit-content',
    height: 'fit-content',
    fontSize: 18,
    fontWeight: 'normal',
    color: 'rgb(117, 117, 117)',
    [css.media.max_md]: {
      fontSize: 16,
    },
  },
});
