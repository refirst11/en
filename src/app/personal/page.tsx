import { Metadata } from 'next';
import getAllPosts from 'lib/getAllPosts';
import generateSEOData from 'lib/generateSEOData';
import PostsData from 'components/PostsData';

export const metadata: Metadata = generateSEOData({
  title: 'Personal - Refirst',
});

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

export default async function DPage() {
  const posts = await getPosts();

  return <PostsData posts={posts} />;
}
