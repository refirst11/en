import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import PostDatMap from 'types/PostDataMap';
import PostData from 'types/PostData';

const getPostData = async (slug: string): Promise<PostData> => {
  const folder = path.join(process.cwd(), '/src/entries');
  const fullPath = path.join(folder, `${slug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter<string, PostDatMap>(file);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, {
      theme: 'github-light',
    })
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  const post: PostData = {
    content: contentHtml,
    title: data.title as string,
    subtitle: data.subtitle as string,
    date: data.date as string,
  };
  return post;
};

export default getPostData;
