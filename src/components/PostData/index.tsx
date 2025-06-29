import React from 'react';
import PostProps from 'types/PostProps';
import { Link } from 'next-link-transitions';
import { styles } from './styles';
import { animation } from 'styles/global';
import { css } from '@plumeria/core';

const ReturnLink = () => {
  return (
    <Link className={css.props(styles.back)} href="/personal" old={animation.$old} next={animation.$next}>
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div className={styles.$post}>
      <ReturnLink />
      <h1 className={styles.$color_h1}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostData;
