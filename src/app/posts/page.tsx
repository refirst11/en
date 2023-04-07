import { Metadata } from 'next';
import getAllPosts from 'lib/getAllPosts';
import PostsData from 'components/PostsData';
import generateSEOData from 'lib/generateSEOData';

export const metadata: Metadata = generateSEOData({
  title: 'Posts',
  subtitle: 'posts articles',
  date: undefined,
});

async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <PostsData posts={posts} />
    </>
  );
}

export default Page;
