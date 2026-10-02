import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import PostsData from 'types/PostsData';
import PostsDataMap from 'types/PostsDataMap';

const dateKey = (date: string) => {
  const [year, month, day] = date.split(/[/-]/).map(Number);
  return year * 10000 + month * 100 + day;
};

const getAllPosts = async (skip?: number, limit?: number): Promise<PostsData[]> => {
  const folder = path.join(process.cwd(), '/src/entries');
  const files = await fs.readdir(folder);
  const posts = await Promise.all(
    files
      .map(async (fileName) => {
        const fullPath = path.join(folder, fileName);
        const file = await fs.readFile(fullPath, 'utf8');
        const { data } = matter<string, PostsDataMap>(file);

        return {
          slug: fileName.replace(/\.md$/, ''),
          title: data.title as string,
          subtitle: data.subtitle as string,
          date: data.date as string,
        };
      })
  );
  return posts.sort((a, b) => dateKey(b.date) - dateKey(a.date)).slice(skip, limit);
};

export default getAllPosts;
