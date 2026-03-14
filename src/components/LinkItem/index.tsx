import * as style from '@plumeria/core';
import { styles } from 'app/listup';
import { Link } from 'next-link-transitions';
import { transition } from 'styles/animation';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link className={style.use(styles.link)} href={href} viewTransitionName={style.use(transition.name)}>
      <span>{children}</span>
      <div />
      <span className={style.use(styles.date)}>{date}</span>
    </Link>
  );
};
