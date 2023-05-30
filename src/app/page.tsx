import { Metadata } from 'next';
import Image from 'next/image';
import profilePic from '@public/MyProf.png';
import generateSEOData from 'lib/generateSEOData';

export const metadata: Metadata = generateSEOData({ title: 'Home', subtitle: 'About', date: '1994' });

const Page = (): JSX.Element => {
  return (
    <>
      <Image className="main_icon" src={profilePic} alt="icon" quality={100} width={90} height={90} />
      <p>
        I am a person who designs and creates software in Tokyo.
        <br />I like to work on
        <a href="https://works.su-pull.net/"> my-projects</a> and I want to be part of the newest and most advanced
        areas.
      </p>
      <h1>Career</h1>
      <ul>
        <li>1994 Born in Kitakyushu, Fukuoka, Japan</li>
        <li>2014 Traveled to the USA, Seattle, and Canada</li>
        <li>2016-2017 Worked PC DEPOT Co. Ltd.</li>
        <li>2018 Passed the High School Equivalency Exam</li>
        <li>2019-2020 Self-studied design</li>
        <li>2021 Started learning programming and git</li>
        <li>2022 Built a REST and GraphAPI</li>
        <li>2023 Feedbacks in JS Framework experimental features</li>
      </ul>
    </>
  );
};

export default Page;
