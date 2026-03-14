import * as style from '@plumeria/core';
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
    <a className={style.use(styles.link)} href={href}>
      <span>{children}</span>
      <span className={style.use(styles.tag)}>{subti}</span>
      <div className={style.use(styles.divTag)} />
      <span className={style.use(styles.date)}>{date}</span>
    </a>
  );
};
