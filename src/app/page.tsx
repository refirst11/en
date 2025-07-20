import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import { css } from '@plumeria/core';
import { JSX } from 'react';
import { breakpoints } from 'lib/mediaQuery';

export const metadata: Metadata = generateSEOData({ title: 'Refirst' });

const Page = (): JSX.Element => {
  return (
    <>
      <h1 className={css.props(styles.name)}>Refirst</h1>
      <p>
        I&apos;ve creates ideas and designs software, and currently living in JPN. like work on Ever since I grew up, I
        have had a wide interest in the world of Audio environment and for engineers.
      </p>
      <ul className={css.props(styles.list)}>
        <li>
          <span>Java Intern ship 1month</span>
          <div />
        </li>
        <li>
          <span>Learning programming and git to 2022</span>
          <div />
          <span className={css.props(styles.date)}>2021</span>
        </li>
        <li>
          <span>Learning design - to 2020</span>
          <div />
          <span className={css.props(styles.date)}>2019</span>
        </li>
        <li>
          <span>Passed the Japan high school certification</span>
          <div />
          <span className={css.props(styles.date)}>2018</span>
        </li>
        <li>
          <span>Leave PC SHOP</span>
          <div />
          <span className={css.props(styles.date)}>2017</span>
        </li>
        <li>
          <span>Joined PC SHOP</span>
          <div />
          <span className={css.props(styles.date)}>2016</span>
        </li>
        <li>
          <span>Experiences until then become to mental illness</span>
          <div />
          <span className={css.props(styles.date)}>2015</span>
        </li>
        <li>
          <span>Traveled Canada Seattle</span>
          <div />
          <span className={css.props(styles.date)}>2014</span>
        </li>
      </ul>
    </>
  );
};

export default Page;

const styles = css.create({
  name: {
    position: 'relative',
    bottom: 20,
    left: 4,
    [breakpoints.md]: {
      bottom: 32,
    },
  },
  list: {
    position: 'relative',
    top: 40,
    width: 'fit-content',
    [breakpoints.md]: {
      width: '100%',
      '& li': {
        width: '100%',
      },
    },

    '& li': {
      position: 'relative',
      top: -32,
      right: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 520,
      padding: 16,
      margin: 0,
      fontWeight: '500',
      color: 'black',
      listStyle: 'none',
      borderRadius: 12,
    },
    '& li div': {
      position: 'relative',
      top: 2,
      flex: 1,
      height: '1px',
      margin: '0 8px',
      background: '#d9d9d9',
    },
  },
  date: {
    marginLeft: 4,
    fontWeight: '400',
    color: 'gray',
  },
});
