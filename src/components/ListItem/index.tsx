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
    <a styleName={styles.link} href={href}>
      <span>{children}</span>
      <span styleName={styles.tag}>{subti}</span>
      <div styleName={styles.divTag} />
      <span styleName={styles.date}>{date}</span>
    </a>
  );
};
