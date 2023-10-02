import fs from 'fs/promises';
import path from 'path';

const getSlugPath = async () => {
  const folder = path.join(process.cwd(), '/src/entries');
  const files = await fs.readdir(folder);
  const posts = await Promise.all(
    files.map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    })
  );
  return posts;
};

export default getSlugPath;
