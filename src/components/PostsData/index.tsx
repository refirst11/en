import PostsProps from 'types/PostsProps';
import { styles } from 'app/listup';
import { LinkItem } from 'components/LinkItem';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={styles.$list}>
      {posts.map(({ slug, title, date }) => (
        <LinkItem key={slug} href={`/personal/${slug}`} date={date}>
          {title}
        </LinkItem>
      ))}
    </div>
  );
};

export default PostsData;
