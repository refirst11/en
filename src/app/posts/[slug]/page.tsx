import { format } from 'date-fns';
import SEO from 'components/Seo';
// import Params from 'types/Params';
import getPostData from 'libs/getPostData';
import getSlugPath from 'libs/getSlugPath';
import RouterBack from 'components/RouterBack';
import styles from 'styles/pages/DetailsStyles';

type Params = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Params) => {
  const post = await getPostData(params.slug);

  return (
    <>
      <SEO title={post.title} description={post.subtitle} />
      <RouterBack />
      <div className="size_time">{format(new Date(post.date as string | number | Date), 'MMMM eeee, do yyyy')}</div>
      <h1 className="color_h1">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {/* <style jsx>{styles}</style> */}
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
