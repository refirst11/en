import * as css from "@plumeria/core";
import { styles } from 'app/listup';
import { Link } from 'next-link-transitions';
import { transition } from 'styles/animation';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link className={css.props(styles.link)} href={href} viewTransitionName={css.props(transition.name)}>
      <span>{children}</span>
      <div />
      <span className={css.props(styles.date)}>{date}</span>
    </Link>
  );
};
