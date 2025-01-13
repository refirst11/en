import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import PostDatMap from '@/types/PostDataMap';
import PostData from '@/types/PostData';

const getPostData = async (slug: string): Promise<PostData> => {
  const folder = path.join(process.cwd(), '/src/entries');
  const fullPath = path.join(folder, `${slug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter<string, PostDatMap>(file);
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: 'css-variables', //'min-dark',
      keepBackground: true,
      onVisitHighlightedLine(node) {
        node.properties.className.push('highlighted');
      },
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
