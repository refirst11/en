// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import pageSize from 'libs/pageSize';
import getAllPosts from 'libs/getAllPosts';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const parsedPage = parseInt(page as string, 10) + 1;
  const skip = (parsedPage - 1) * pageSize;
  const limit = parsedPage * pageSize;
  const posts = await getAllPosts(skip, limit);
  res.statusCode = 200;
  res.json(posts);
};
