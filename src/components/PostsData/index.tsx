import PostsProps from 'types/PostsProps';
import { styles } from 'app/listup';
import { LinkItem } from 'components/LinkItem';
import * as style from '@plumeria/core';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={style.use(styles.list)}>
      {posts.map(({ slug, title, date }) => (
        <LinkItem key={slug} href={`/personal/${slug}`} date={date}>
          {title}
        </LinkItem>
      ))}
    </div>
  );
};

export default PostsData;
