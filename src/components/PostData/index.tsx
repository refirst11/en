import React from 'react';
import styles from './styles.module.scss';
import PostProps from 'types/PostProps';
import { HiOutlineBackspace } from 'react-icons/hi';
import Link from 'next/link';
import Animation from 'components/Animation';

const ReturnLink = () => {
  return (
    <Link className={styles.return} href="/posts">
      <HiOutlineBackspace />
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <Animation>
      <div className={styles.negative_margin}>
        <h1 className={styles.color_h1}>
          {post.title}
          <ReturnLink />
        </h1>
        <div className={styles.a_hover} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Animation>
  );
};

export default PostData;
