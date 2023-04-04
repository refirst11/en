'use client';

import Link from 'next/link';
import styles from 'styles/app/ArticlesStyles';
import PostsProps from 'types/PostsProps';

type keywordProps = {
  keyword: string;
};

const SearchResults = ({ posts, keyword }: PostsProps & keywordProps) => {
  return (
    <ul>
      {posts.map(
        ({ slug, title, subtitle, date }) =>
          title.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) && (
            <li key={slug}>
              <Link href={`/posts/${slug}`} className="container">
                <h2 className="title">
                  {title}
                  <div className="subtitle">{subtitle}</div>
                </h2>
                <time className="time">{date}</time>
              </Link>
            </li>
          )
      )}
      <style jsx>{styles}</style>
    </ul>
  );
};

export default SearchResults;
