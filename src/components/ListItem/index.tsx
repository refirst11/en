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
      <span sx={styles.tag}>{subti}</span>
      <div sx={styles.divTag} />
      <span sx={styles.date}>{date}</span>
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link sx={styles.link} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a sx={styles.link} href={href}>
      {content}
    </a>
  );
};
