import '@plumeria/core';
import Link from 'next/link';
import { styles } from 'app/listup';

type ListItemProps = {
  children: React.ReactNode;
  subti?: string;
  date: string;
  href: string;
};

export const ListItem = ({ children, subti, date, href }: ListItemProps) => {
  const content = (
    <>
      <span>{children}</span>
      <span classStyle={styles.tag}>{subti}</span>
      <div classStyle={styles.divTag} />
      <span classStyle={styles.date}>{date}</span>
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link classStyle={styles.link} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a classStyle={styles.link} href={href}>
      {content}
    </a>
  );
};
