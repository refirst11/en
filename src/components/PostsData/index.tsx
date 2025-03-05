import { Link } from 'next-link-transitions';
import PostsProps from 'types/PostsProps';
import { styles } from './styles';
import { animation } from 'lib/viewTransition';

const PostsData = ({ posts }: PostsProps) => {
  return (
    <div className={styles.list}>
      {posts.map(({ slug, title, date }) => (
        <Link key={slug} href={`/personal/${slug}`} old={animation.old} entry={animation.entry}>
          <span>{title}</span>
          <div />
          <span className={styles.date}>{date}</span>
        </Link>
      ))}
    </div>
  );
};

export default PostsData;
