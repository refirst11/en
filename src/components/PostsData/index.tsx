'use client';

import InfiniteScroll from '@/components/InfiniteScroll';
import SearchResults from '@/components/SearchResults';
import { useState } from 'react';
import PostsProps from '@/types/PostsProps';
import styles from './styles.module.scss';
import Animation from '@/components/Animation/index.css';

const PostsData = ({ posts }: PostsProps) => {
  const [keyword, setKeyword] = useState('');

  return (
    <Animation>
      <div className={styles.search_container}>
        <input value={keyword} type="text" onChange={(e) => setKeyword(e.target.value)} className={styles.search_box} />
      </div>
      {keyword ? <SearchResults posts={posts} keyword={keyword} /> : <InfiniteScroll posts={posts.slice(0, 3)} />}
    </Animation>
  );
};

export default PostsData;
