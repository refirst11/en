import { Metadata } from 'next';
import getAllPosts from 'libs/getAllPosts';
import PostsData from 'components/PostsData';

export const metadata: Metadata = {
  title: 'su-pull - articles',
  description: 'articles',
};

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

async function Page() {
  const posts = await getPosts();

  return (
    <>
      <PostsData posts={posts} />
    </>
  );
}

export default Page;
