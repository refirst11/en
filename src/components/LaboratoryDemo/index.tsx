import { ReactNode } from 'react';
import * as css from '@plumeria/core';
import Link from 'next/link';
import { breakpoints } from 'lib/mediaQuery';

type LaboratoryDemoProps = {
  title: string;
  subtitle: string;
  repository: string;
  children: ReactNode;
};

const LaboratoryDemo = ({ title, subtitle, repository, children }: LaboratoryDemoProps) => {
  return (
    <article sx={styles.post}>
      <Link sx={styles.back} href="/laboratory">
        back
      </Link>
      <h1 sx={styles.title}>{title}</h1>
      <div sx={styles.meta}>
        <span>{subtitle}</span>
        <a href={repository}>GitHub →</a>
      </div>
      {children}
    </article>
  );
};

export default LaboratoryDemo;

const styles = css.create({
  post: {
    position: 'relative',
    zIndex: 1,
    width: 506,
    marginBottom: 40,
    [breakpoints.md]: {
      width: '100%',
      marginTop: 60,
      marginBottom: 120,
    },
  },

  back: {
    position: 'absolute',
    right: 0,
    marginTop: -20,
  },

  title: {
    fontWeight: 'normal',
    color: 'rgb(0, 160, 185)',
  },

  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 24,
    color: 'gray',
  },
});
