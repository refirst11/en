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
    <a className={css.props(styles.link)} href={href}>
      <span>{children}</span>
      <span className={css.props(styles.tag)}>{subti}</span>
      <div className={css.props(styles.divTag)} />
      <span className={css.props(styles.date)}>{date}</span>
    </a>
  );
};
