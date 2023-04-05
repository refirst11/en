import { format } from 'date-fns';
import { Metadata } from 'next';
import Params from 'types/Params';
import getPostData from 'lib/getPostData';
import getSlugPath from 'lib/getSlugPath';
import RouterBack from 'components/RouterBack';
import styles from './styles.module.scss';
import generateSEOData from 'lib/generateSEOData';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostData(params.slug);
  return generateSEOData({ title: post.title, subtitle: post.subtitle, date: post.date });
}

const Page = async ({ params }: Params) => {
  const post = await getPostData(params.slug);

  return (
    <>
      <RouterBack />
      <div className={styles.size_time}>
        {format(new Date(post.date as string | number | Date), 'MMMM eeee, do yyyy')}
      </div>
      <h1 className={styles.color_h1}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export async function generateStaticParams() {
  const posts = await getSlugPath();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Page;
