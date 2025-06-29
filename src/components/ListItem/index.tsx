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
    <a className={styles.$link} href={href}>
      <span>{children}</span>
      <span className={styles.$tag}>{subti}</span>
      <div />
      <span className={styles.$date}>{date}</span>
    </a>
  );
};
