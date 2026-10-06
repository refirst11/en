import { Metadata } from 'next';
import Params from 'types/Params';
import getPostData from 'lib/getPostData';
import getSlugPath from 'lib/getSlugPath';
import generateSEOData from 'lib/generateSEOData';
import PostData from 'components/PostData';

const getPost = async (slug: string) => {
  const post = await getPostData(slug);
  return post;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolveParams = await params;
  const post = await getPost(resolveParams.slug);
  return generateSEOData({ title: post.title, subtitle: post.subtitle, date: post.date });
}

async function Page({ params }: Params) {
  const resolveParams = await params;
  const post = await getPost(resolveParams.slug);

  return <PostData post={post} />;
}

export async function generateStaticParams() {
  const posts = await getSlugPath();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Page;
