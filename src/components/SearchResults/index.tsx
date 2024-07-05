import Link from 'next/link';
import styles from '@/components/InfiniteScroll/styles.module.scss';
import PostsProps from '@/types/PostsProps';

type keywordProps = {
  keyword: string;
};

const SearchResults = ({ posts, keyword }: PostsProps & keywordProps) => {
  return (
    <div className={styles.list}>
      <ul>
        {posts.map(
          ({ slug, title, subtitle, date }) =>
            (title.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) || date.match(keyword)) && (
              <li key={slug}>
                <Link href={`/posts/${slug}`} className={styles.container}>
                  <h2 className={styles.title}>
                    {title}
                    <div className={styles.subtitle}>{subtitle}</div>
                  </h2>
                  <time className={styles.time}>{date}</time>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
