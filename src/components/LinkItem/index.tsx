import { styles } from 'app/listup';
import { Link } from 'next-link-transitions';
import { animation } from 'styles/global';

export const LinkItem = ({ children, date, href }: { children: React.ReactNode; date: string; href: string }) => {
  return (
    <Link className={styles.$link} href={href} old={animation.$old} next={animation.$next}>
      <span>{children}</span>
      <div />
      <span className={styles.$date}>{date}</span>
    </Link>
  );
};
