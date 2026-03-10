import * as css from '@plumeria/core';
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
    <a className={css.use(styles.link)} href={href}>
      <span>{children}</span>
      <span className={css.use(styles.tag)}>{subti}</span>
      <div className={css.use(styles.divTag)} />
      <span className={css.use(styles.date)}>{date}</span>
    </a>
  );
};
