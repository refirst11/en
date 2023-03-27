import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type CurrentActiveLinkProps = {
  href: string;
  activeClassName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

const CurrentActiveLink = ({ href, children, activeClassName, className, onClick }: CurrentActiveLinkProps) => {
  const pathname = usePathname() as string;
  const path = () => {
    const hrefRegex = new RegExp(`^${href}$`);
    return hrefRegex.test(pathname);
  };

  return (
    <Link href={href} scroll={false} onClick={onClick} className={`${path() && activeClassName} ${className}`}>
      {children}
    </Link>
  );
};

export default CurrentActiveLink;
