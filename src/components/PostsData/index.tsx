import { Link } from 'next-view-transitions';
import PostsProps from 'types/PostsProps';
import { styles } from './styles';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={styles.list}>
      {posts.map(({ slug, title, date }) => (
        <Link key={slug} href={`/personal/${slug}`}>
          <span>{title}</span>
          <div />
          <span className={styles.date}>{date}</span>
        </Link>
      ))}
    </div>
  );
};

export default PostsData;
