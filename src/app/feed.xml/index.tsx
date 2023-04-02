import { GetServerSidePropsContext } from 'next';
import { Feed } from 'feed';
import getAllPosts from 'libs/getAllPosts';

const Page = () => null;
export default Page;

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const posts = await getAllPosts();
  const feed = new Feed({
    title: 'su-pull',
    description: 'The 2xxx year fight of my load',
    id: 'https://su-pull.net',
    link: 'https://su-pull.net',
    language: 'en',
    image: 'https://su-pull.net/pull.jpg',
    favicon: 'https://su-pull.net/favicon.ico',
    author: {
      name: 's.w',
      link: 'https://su-pull.net/',
    },
    copyright: '© su pu',
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      description: post.subtitle,
      id: `https://su-pull.net/posts/${post.slug}`,
      link: `https://su-pull.net/posts/${post.slug}`,
      date: new Date(post.date),
    });
  });

  const xml = feed.rss2();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};
