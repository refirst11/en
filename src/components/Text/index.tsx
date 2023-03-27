import { Rationale } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import styles from 'styles/components/TextStyles';

const rationale = Rationale({ subsets: ['latin'], weight: '400' });
const Text = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <Fragment>
      <div className={`Text`}>
        {pathname == '/'
          ? 'Home'
          : pathname.includes('/posts')
          ? 'Posts'
          : pathname.slice(1).replace(/^[a-z]/, (char) => char.toUpperCase())}
      </div>

      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Text;
