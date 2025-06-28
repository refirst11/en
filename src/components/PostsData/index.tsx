import PostsProps from 'types/PostsProps';
import { styles } from 'app/listup';
import { css } from '@plumeria/core';
import { LinkItem } from 'components/LinkItem';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={css.props(styles.list)}>
      {posts.map(({ slug, title, date }) => (
        <LinkItem key={slug} href={`/personal/${slug}`} date={date}>
          {title}
        </LinkItem>
      ))}
    </div>
  );
};

export default PostsData;
