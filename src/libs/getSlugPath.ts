import fs from 'fs';
import path from 'path';

const getSlugPath = () => {
  const folder = path.join(process.cwd(), 'entries');
  const files = fs.readdirSync(folder);
  const posts = files.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
  return posts;
};

export default getSlugPath;
