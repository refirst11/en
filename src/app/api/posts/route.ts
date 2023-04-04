// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';

import pageSize from 'lib/pageSize';
import getAllPosts from 'lib/getAllPosts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const parsedPage = parseInt(page as string, 10) + 1;
  const skip = (parsedPage - 1) * pageSize;
  const limit = parsedPage * pageSize;
  const posts = await getAllPosts(skip, limit);

  return NextResponse.json(posts);
}
