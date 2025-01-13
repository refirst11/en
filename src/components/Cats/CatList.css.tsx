'use client';

import React from 'react';
import { usePhotograph } from '@/lib/use-photograph';
import { css } from '@plumeria/core';
import CatImage from '@/types/CatImage';

type CatListProps = {
  cats: CatImage[];
};

const styles = css.create({
  heading: {
    textAlign: 'center',
  },
  cat_list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '40px',
  },

  cat_item: {
    padding: '20px',
    objectFit: 'cover',
    filter: 'blur(30px)',
    border: '1px solid #ddd',
    borderRadius: '5px',
    opacity: 0.7,
    transition: 'all 0.2s ease-out',
  },

  visible: {
    filter: 'blur(0)',
    opacity: 1,
  },
});

const CatItem = ({ cat }: { cat: CatImage }) => {
  const imageRef = usePhotograph(styles.visible);

  return (
    <img ref={imageRef} className={styles.cat_item} src={cat.url} alt={`Cat ${cat.id}`} width={250} height={200} />
  );
};

const CatList = ({ cats }: CatListProps) => {
  return (
    <>
      <h1 className={styles.heading}>Cat Images</h1>
      <div className={styles.cat_list}>
        {cats.map((cat) => (
          <CatItem key={cat.id} cat={cat} />
        ))}
      </div>
      <h1 className={styles.heading}>credit at The Cat API</h1>
    </>
  );
};

export default CatList;
