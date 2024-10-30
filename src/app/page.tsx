import Animation from '@/components/Animation/index.css';
import { Metadata } from 'next';
import generateSEOData from '@/lib/generateSEOData';
import ExternalLink from '@/components/ExternalLink';
import styles from './styles.module.scss';

export const metadata: Metadata = generateSEOData({ title: 'About', subtitle: 'personal page', date: '1994' });

const Page = (): JSX.Element => {
  const url = process.env.PROJECTS_URL || '';
  const fire = process.env.FIREMOTION || '';
  const type = process.env.TYPEDCSSX || '';
  const snow = process.env.SNOWYUI || '';
  return (
    <Animation>
      <p>
        I've creates ideas and designs software, and currently living in Tokyo.
        <br />
        like work on
        <ExternalLink href={url}> my projects</ExternalLink> and I want newest and most advanced areas.
      </p>
      <h1>history</h1>
      <ul className={styles.list}>
        <li>1994: Born</li>
        <li>2014: Traveled to USA → Canada → Seattle</li>
        <li>2016: Joined PC SHOP - to 2017</li>
        <li>2018: Passed the Japan high school certification</li>
        <li>2019: Learning design - to 2020</li>
        <li>2021: Learning programming and git (developer) to 2022</li>
        <li>2023: Java Intern ship 1month</li>
        <li>
          2024: Creates <ExternalLink href={fire}>firemotion</ExternalLink>
        </li>
        <li>
          2024: Creates <ExternalLink href={type}>TypedX</ExternalLink>
        </li>
      </ul>
    </Animation>
  );
};

export default Page;
