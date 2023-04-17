'use client';

import InfiniteScroll from 'components/InfiniteScroll';
import SearchResults from 'components/SearchResults';
import { Fragment, useState } from 'react';
import PostsProps from 'types/PostsProps';
import styles from './styles';

const PostsData = ({ posts }: PostsProps) => {
  const [keyword, setKeyword] = useState('');
  return (
    <Fragment>
      <div className="search_container">
        <input value={keyword} type="text" onChange={(e) => setKeyword(e.target.value)} className="search_box" />
      </div>
      {keyword ? <SearchResults posts={posts} keyword={keyword} /> : <InfiniteScroll posts={posts.slice(0, 3)} />}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default PostsData;
