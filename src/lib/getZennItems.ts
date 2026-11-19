import ZennItem from 'types/ZennItem';

const USERNAME = 'refirst11';
const ORIGIN = 'https://zenn.dev';

type ZennPost = {
  slug: string;
  title: string;
  path: string;
  published_at: string;
};

// Zenn's list endpoints (/api/articles, /api/books) are unofficial but public.
const fetchAll = async (kind: 'articles' | 'books'): Promise<ZennPost[]> => {
  const items: ZennPost[] = [];
  let page: number | null = 1;

  while (page) {
    const res = await fetch(`${ORIGIN}/api/${kind}?username=${USERNAME}&order=latest&page=${page}`);
    // Throw instead of returning [] so ISR keeps serving the last good page.
    if (!res.ok) throw new Error(`Zenn ${kind} API responded ${res.status}`);
    const json = (await res.json()) as Record<string, ZennPost[]> & { next_page: number | null };
    items.push(...json[kind]);
    page = json.next_page;
  }

  return items;
};

// 2026-10-16T19:09:32+09:00 -> 2026-10/16 (same shape as src/entries dates)
const formatDate = (iso: string) => `${iso.slice(0, 7)}/${iso.slice(8, 10)}`;

const getZennItems = async (): Promise<ZennItem[]> => {
  const [articles, books] = await Promise.all([fetchAll('articles'), fetchAll('books')]);

  return [
    ...articles.map((a) => ({ ...a, type: 'article' as const })),
    ...books.map((b) => ({ ...b, type: 'book' as const })),
  ]
    .sort((a, b) => b.published_at.localeCompare(a.published_at))
    .map(({ slug, title, path, published_at, type }) => ({
      slug,
      title,
      type,
      url: ORIGIN + path,
      date: formatDate(published_at),
    }));
};

export default getZennItems;
