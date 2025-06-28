import { css } from '@plumeria/core';
import { styles } from 'app/listup';
import { Link } from 'next-link-transitions';
import { animation } from 'styles/global';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link
      className={css.props(styles.link)}
      href={href}
      old={css.props(animation.old)}
      next={css.props(animation.next)}
    >
      <span>{children}</span>
      <div />
      <span className={css.props(styles.date)}>{date}</span>
    </Link>
  );
};
