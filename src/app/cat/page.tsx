import React from 'react';
import CatList from '@/components/Cats/CatList.css';
import fetchCatData from '@/lib/fetchCatData';
import Animation from '@/components/Animation';

const HomePage = async () => {
  const catData = await fetchCatData();

  return (
    <Animation>
      <CatList cats={catData} />
    </Animation>
  );
};

export default HomePage;
