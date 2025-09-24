import React from 'react';
import PostProps from 'types/PostProps';
import { Link } from 'next-link-transitions';
import { styles } from './styles';
import { transition } from 'styles/animation';
import { css } from '@plumeria/core';

const ReturnLink = () => {
  return (
    <Link className={css.props(styles.back)} href="/personal" viewTransitionName={css.props(transition.name)}>
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div className={css.props(styles.post)}>
      <div className={css.props(styles.spacing)}>
        <ReturnLink />
        <h1 className={css.props(styles.color_h1)}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostData;
