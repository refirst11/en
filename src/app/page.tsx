import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import ExternalLink from 'components/ExternalLink';

export const metadata: Metadata = generateSEOData({ title: 'About', subtitle: 'personal page', date: '1994' });

const Page = (): JSX.Element => {
  const url = process.env.PROJECTS_URL || '';
  return (
    <>
      <p>
        I've creates ideas and designs software, and currently living in Tokyo.
        <br />
        like to work on
        <ExternalLink href={url}> my projects</ExternalLink> and I want newest and most advanced areas.
      </p>
      <h1>history</h1>
      <ul>
        <li>1994: Kitakyushu, Fukuoka</li>
        <li>2014: Traveled to USA → Canada → Seattle</li>
        <li>2016: Join PC DEPOT Co., Ltd. - to 2017</li>
        <li>2018: Passed the Japan high school certification</li>
        <li>2019: Learning design - to 2020</li>
        <li>2021: Learning programming and git (developer) to 2022</li>
        <li>2023: Intern and Creates a Interface librarys</li>
      </ul>
    </>
  );
};

export default Page;
