import Animate from 'components/Animation';
import DarkToggle from 'components/DarkToggle';
import SEO from 'components/Seo';
import Image from 'next/image';

const Index = (): JSX.Element => {
  return (
    <Animate>
      <SEO title="su-pull - home" description="Index Top Page" />
      <Image className="main_icon" src="/pull.jpg" alt="icon" quality={100} width={120} height={120} loading="eager" />
      <DarkToggle />
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
        Welcome to my webpage! Let's enjoy writing code and developing applications together.
        <br />
        Remember, simple code is often the best code, so let's always strive for simplicity. Are you ready to take your
        first step?
      </p>
    </Animate>
  );
};

export default Index;
