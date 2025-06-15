import { Link } from 'next-link-transitions';
import PostsProps from 'types/PostsProps';
import { styles } from 'app/listup';
import { animation } from 'styles/global';
import { css } from '@plumeria/core';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={css.props(styles.list)}>
      {posts.map(({ slug, title, date }) => (
        <Link key={slug} href={`/personal/${slug}`} old={css.props(animation.old)} next={css.props(animation.next)}>
          <span>{title}</span>
          <div />
          <span className={css.props(styles.date)}>{date}</span>
        </Link>
      ))}
    </div>
  );
};

export default PostsData;
