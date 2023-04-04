import { Metadata } from 'next';
import Image from 'next/image';
import profilePic from 'public/pull.jpg';

export const metadata: Metadata = {
  title: 'su-pull - home',
  description: 'Index Top Page',
};

const Index = (): JSX.Element => {
  return (
    <>
      <Image className="main_icon" src={profilePic} alt="icon" quality={100} width={120} height={120} />
      <dl>
        <dt>Name</dt>
        <dd>Sou Watanabe</dd>
        <dt>Location</dt>
        <dd>Tokyo</dd>
        <dt>Generated</dt>
        <dd>
          <a href="https://github.com/su-pull/macintosh-ahk">Macintosh-ahk</a> /{' '}
          <a href="https://engineers-box.net/">engineers-box</a>
        </dd>
      </dl>
      <hr />

      <h1>Career</h1>
      <ul>
        <li>1994 Born in Kitakyushu, Fukuoka, Japan</li>
        <li>2014 Traveled to the USA, Seattle, and Canada</li>
        <li>2016 Joined PC DEPOT Co., Ltd.</li>
        <li>2017 Left PC DEPOT Co., Ltd.</li>
        <li>2018 Passed the High School Equivalency Exam</li>
        <li>2019 Self-studied design</li>
        <li>2021 Started learning programming languages</li>
        <li>2022 Built a GraphQL API.</li>
      </ul>
      <br />
      <hr />
      <p>
        I have been self-taught in drawing and design and My goal is to be involved in the most cutting-edge fields.
      </p>
    </>
  );
};

export default Index;
