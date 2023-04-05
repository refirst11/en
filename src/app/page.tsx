import { Metadata } from 'next';
import Image from 'next/image';
import profilePic from '@public/alum.png';
import generateSEOData from 'lib/generateSEOData';

export const metadata: Metadata = generateSEOData({ title: 'su-pull', subtitle: 'About', date: '1994' });

const Page = (): JSX.Element => {
  return (
    <>
      <Image className="main_icon" src={profilePic} alt="icon" quality={100} width={80} height={80} />
      <p className="p__width">
        I am a designer based in Tokyo, creating <a href="https://github.com/su-pull/macintosh-ahk">Juster</a>, key
        bindings, and macros. I have self taught drawing and design, My incentive is to be involved in the most
        cutting-edge the fields.
      </p>
      <hr />
      <h1>Career</h1>
      <ul>
        <li>1994 Born in Kitakyushu, Fukuoka, Japan</li>
        <li>2014 Traveled to the USA, Seattle, and Canada</li>
        <li>2016 Joined PC DEPOT Co., Ltd.</li>
        <li>2017 Left PC DEPOT Co., Ltd.</li>
        <li>2018 Passed the High School Equivalency Exam</li>
        <li>2019 Self-studied design</li>
        <li>2020 Self-studied design</li>
        <li>2021 Started learning programming and git</li>
        <li>2022 Built a REST and GraphAPI.</li>
        <li>2023 Feedbacks in Front End Framework API experimental features</li>
      </ul>
    </>
  );
};

export default Page;
