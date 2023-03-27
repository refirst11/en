import { GetStaticProps } from 'next';
import { useState } from 'react';
import styles from 'styles/pages/ArticlesStyles';
import Animate from 'components/Animation';
import SEO from 'components/Seo';
import PostsProps from 'types/PostsProps';
import InfiniteScroll from 'components/InfiniteScroll';
import SearchResults from 'components/SearchResults';
import getAllPosts from 'libs/getAllPosts';

async function getPosts() {
  const posts = await getAllPosts(); 
  return posts
}

async function Page(){
  const posts = await getPosts()
  const [keyword, setKeyword] = useState('');
  return (
    <Animate>
      <SEO title="su-pull - articles" description="articles" />
      <input value={keyword} type="text" onChange={(e) => setKeyword(e.target.value)} className="search_box" />
      {keyword ? <SearchResults posts={posts} keyword={keyword} /> : <InfiniteScroll posts={posts.slice(0, 8)} />}
      <style jsx>{styles}</style>
    </Animate>
  );
};


export default Page;
