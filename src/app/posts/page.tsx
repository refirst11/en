import { Metadata } from 'next';
import getAllPosts from 'lib/getAllPosts';
import PostsData from 'components/PostsData';

export const metadata: Metadata = {
  title: 'su-pull - articles',
  description: 'articles',
};

async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <PostsData posts={posts} />
    </>
  );
}

export default Page;
