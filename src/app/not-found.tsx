import Link from 'next/link';
import generateSEOData from 'lib/generateSEOData';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOData({
  title: 'not found 404',
  subtitle: 'not found url error code is 404',
  date: 'now',
});

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
