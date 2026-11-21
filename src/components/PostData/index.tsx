import PostProps from 'types/PostProps';
import Link from 'next/link';
import { styles } from './styles';
import '@plumeria/core';

const ReturnLink = () => {
  return (
    <Link sx={styles.back} href="/posts">
      back
    </Link>
  );
};

const PostData = ({ post }: PostProps) => {
  return (
    <div sx={styles.post}>
      <div sx={styles.spacing}>
        <ReturnLink />
        <h1 sx={styles.color_h1}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostData;
