import React from 'react';
import PostProps from 'types/PostProps';
import { Link } from 'next-view-transitions';
import { styles } from './styles';

const ReturnLink = () => {
  return (
    <Link className={styles.back} href="/personal">
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div className={styles.post}>
      <ReturnLink />
      <h1 className={styles.color_h1}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostData;
