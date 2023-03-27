import Head from 'next/head';

type StProp = {
  title: string;
  date?: string | number | Date;
  description: string;
};

const Seo = ({ title, date, description }: StProp) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://su-pull.net/api/og?title=${title}&date=${date}`} />
    </Head>
  );
};

export default Seo;
