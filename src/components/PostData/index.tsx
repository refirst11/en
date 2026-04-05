import PostProps from 'types/PostProps';
import { Link } from 'next-link-transitions';
import { styles } from './styles';
import { transition } from 'styles/animation';
import * as css from '@plumeria/core';

const ReturnLink = () => {
  return (
    <Link styleName={styles.back} href="/personal" viewTransitionName={css.use(transition.name)}>
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div styleName={styles.post}>
      <div styleName={styles.spacing}>
        <ReturnLink />
        <h1 styleName={styles.color_h1}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostData;
