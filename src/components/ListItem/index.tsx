import '@plumeria/core';
import { styles } from 'app/listup';

export const ListItem = ({
  children,
  subti,
  date,
  href,
}: {
  children: React.ReactNode;
  subti?: string;
  date: string;
  href: string;
}) => {
  return (
    <a classStyle={styles.link} href={href}>
      <span>{children}</span>
      <span classStyle={styles.tag}>{subti}</span>
      <div classStyle={styles.divTag} />
      <span classStyle={styles.date}>{date}</span>
    </a>
  );
};
