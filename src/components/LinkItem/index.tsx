import '@plumeria/core';
import { styles } from 'app/listup';
import Link from 'next/link';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link classStyle={styles.link} href={href}>
      <span>{children}</span>
      <div />
      <span classStyle={styles.date}>{date}</span>
    </Link>
  );
};
