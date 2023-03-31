import SEO from 'components/Seo';
import getAllPosts from 'libs/getAllPosts';
import PostsData from 'components/PostsData';

async function getPosts() {
  const posts = await getAllPosts();
  return posts;
}

async function Page() {
  const posts = await getPosts();

  return (
    <div className="layout_center_content">
      <SEO title="su-pull - articles" description="articles" />
      <PostsData posts={posts} />
    </div>
  );
}

export default Page;
