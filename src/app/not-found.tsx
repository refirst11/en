import Link from 'next/link';
import { JSX } from 'react';

const NotFound = (): JSX.Element => {
  return (
    <>
      <h1>ClientSide Error status code 404</h1>
      <p>Request page is not found</p>
      <dl>
        <Link href="/">Return to Top page</Link>
      </dl>
    </>
  );
};

export default NotFound;
