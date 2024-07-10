import React from 'react';
import CatList from '@/components/Cats/CatList.css';
import fetchCatData from '@/lib/fetchCatData';

const HomePage = async () => {
  const catData = await fetchCatData();

  return (
    <main>
      <CatList cats={catData} />
    </main>
  );
};

export default HomePage;
