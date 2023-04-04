import { format } from 'date-fns';
import { Metadata } from 'next';
import getPostData from 'libs/getPostData';
import getSlugPath from 'libs/getSlugPath';
import RouterBack from 'components/RouterBack';
import styles from './styles.module.scss';

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostData(params.slug);

  return {
    title: post.title,
    description: post.subtitle,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

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
