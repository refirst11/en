import Animation from '@/components/Animation';
import { Metadata } from 'next';
import generateSEOData from '@/lib/generateSEOData';
import ExternalLink from '@/components/ExternalLink';
import styles from './styles.module.scss';
import { JSX } from 'react';

export const metadata: Metadata = generateSEOData({ title: 'Top', subtitle: 'personal page', date: '1994' });

const Page = (): JSX.Element => {
  const url = process.env.PROJECTS_URL || '';

  return (
    <Animation>
      <p>
        I&apos;ve creates ideas and designs software, and currently living in Tokyo.
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
        <li>2024: Create firemotion</li>
        <li>2024: Create TypedCSSX ( archived )</li>
        <li>2024: Create elter ( archived )</li>
        <li>2025: Create eslint-plugin-object-css</li>
        <li>2025: Create zss-engine</li>
        <li>2025: Create plumeria ( css-in-js )</li>
      </ul>
    </Animation>
  );
};

export default Page;
