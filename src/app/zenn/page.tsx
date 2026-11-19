import { Metadata } from 'next';
import generateSEOData from 'lib/generateSEOData';
import getZennItems from 'lib/getZennItems';
import { styles } from 'app/listup';
import { ListItem } from 'components/ListItem';

export const metadata: Metadata = generateSEOData({ title: 'Zenn - Refirst' });

// Re-fetch from Zenn at most once an hour so new posts show up without a redeploy.
export const revalidate = 3600;

export default async function Page() {
  const items = await getZennItems();

  return (
    <div classStyle={styles.list} lang="ja">
      {items.map(({ slug, title, url, date, type }) => (
        <ListItem key={slug} href={url} date={date} subti={type === 'book' ? 'book' : undefined}>
          {title}
        </ListItem>
      ))}
    </div>
  );
}
