import * as css from '@plumeria/core';
import { Link } from 'next-link-transitions';
import { styles } from 'app/listup';
import { transition } from 'styles/animation';

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
      <Link classStyle={styles.link} href={href} viewTransitionName={css.use(transition.name)}>
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
