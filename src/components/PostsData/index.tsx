'use client';
import styles from 'styles/pages/ArticlesStyles';

import InfiniteScroll from 'components/InfiniteScroll';
import SearchResults from 'components/SearchResults';
import { Fragment, useState } from 'react';
import PostsProps from 'types/PostsProps';

const PostsData = ({ posts }: PostsProps) => {
  const [keyword, setKeyword] = useState('');
  return (
    <Fragment>
      <input value={keyword} type="text" onChange={(e) => setKeyword(e.target.value)} className="search_box" />
      {keyword ? <SearchResults posts={posts} keyword={keyword} /> : <InfiniteScroll posts={posts.slice(0, 2)} />}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

// : <InfiniteScroll posts={posts.slice(0, 8)} />

export default PostsData;
