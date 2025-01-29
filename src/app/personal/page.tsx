import { Metadata } from 'next';
import getAllPosts from 'lib/getAllPosts';
import generateSEOData from 'lib/generateSEOData';
import PostsData from 'components/PostsData';

export const metadata: Metadata = generateSEOData({
  title: 'personal',
  subtitle: 'personal articles',
  date: undefined,
});

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

async function Page() {
  const posts = await getPosts();

  return <PostsData posts={posts} />;
}

export default Page;
