import '@plumeria/core';
import { styles } from 'app/listup';
import Link from 'next/link';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link sx={styles.link} href={href}>
      <span>{children}</span>
      <div />
      <span sx={styles.date}>{date}</span>
    </Link>
  );
};
