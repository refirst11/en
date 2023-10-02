'use client';

import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
};

const ExternalLink = ({ children, href }: ExternalLinkProps) => {
  return (
    <a className={styles.externalLink} href={href}>
      {children}
    </a>
  );
};

export default ExternalLink;
