import PostProps from 'types/PostProps';
import { Link } from 'next-link-transitions';
import { styles } from './styles';
import { transition } from 'styles/animation';
import * as style from '@plumeria/core';

const ReturnLink = () => {
  return (
    <Link className={style.use(styles.back)} href="/personal" viewTransitionName={style.use(transition.name)}>
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div className={style.use(styles.post)}>
      <div className={style.use(styles.spacing)}>
        <ReturnLink />
        <h1 className={style.use(styles.color_h1)}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostData;
