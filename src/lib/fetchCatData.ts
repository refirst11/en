import CatImage from '@/types/CatImage';

const fetchCatData = async (): Promise<CatImage[]> => {
  const apiKey = process.env.CAT_API_KEY || '';
  const res = await fetch(`${process.env.CAT_API_URL}?limit=18&breed_ids=beng,siam`, {
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    next: { revalidate: 60 * 60 * 12 },
  });

  const data = await res.json();
  return data;
};

export default fetchCatData;
