import { SWRInfiniteKeyLoader } from 'swr/infinite';
import PostsProps from 'types/PostsProps';

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: PostsProps[]) => {
  if (previousPageData && !previousPageData.length) {
    return null;
  }
  return `/api/posts?page=${pageIndex}`;
};

export default getKey;
