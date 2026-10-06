'use client';

import { useState } from 'react';
import * as css from '@plumeria/core';
import { CircleRotation, StraightInfinity } from 'react-magic-card';

const images = [
  { src: '/images/laboratory/pexels-alex-andrews-821736.jpg', alt: 'Alex Andrews the pexels picture' },
  { src: '/images/laboratory/pexels-cottonbro-studio-6869655.jpg', alt: 'Cottonbro Studio the pexels picture' },
  { src: '/images/laboratory/pexels-matheus-bertelli-7410722.jpg', alt: 'Matheus Bertelli the pexels picture' },
  { src: '/images/laboratory/pexels-matteo-petralli-1828875.jpg', alt: 'Matteo Petralli the pexels picture' },
  { src: '/images/laboratory/pexels-timo-volz-3643714.jpg', alt: 'Timo Volz the pexels picture' },
];

export const MagicCard = () => {
  const [circle, setCircle] = useState(false);

  return (
    <div classStyle={styles.container}>
      <button classStyle={styles.toggle} onClick={() => setCircle(!circle)}>
        {circle ? 'StraightInfinity' : 'CircleRotation'} →
      </button>
      {circle ? (
        <CircleRotation
          classImages={css.use(styles.images)}
          images={images}
          start={Math.ceil(images.length / 2 - 1)}
          radius={150}
          width={100}
          height={150}
          controller={40}
          animate={{
            scale: 0.6,
            rotateX: -26,
            rotateY: 26,
            rotateZ: 14,
            selectScale: 1.6,
            selectRotateX: 20,
            selectRotateY: 20,
            selectRotateZ: -10,
          }}
          initial={{
            rotateX: 246,
            rotateY: 246,
            rotateZ: -50,
            selectScale: 1.6,
            selectRotateX: 40,
            selectRotateY: 40,
            selectRotateZ: -10,
          }}
          transition={{ duration: 0.12, type: 'spring', mass: 0.93 }}
          detailProperty={{ scale: 3 }}
          detailTransition={{ duration: 0.2 }}
        />
      ) : (
        <StraightInfinity
          className={css.use(styles.rotate)}
          classImages={css.use(styles.images)}
          images={images}
          width={140}
          height={210}
          start={Math.ceil(images.length / 2 - 1)}
          controller={200}
          margin={-20}
          animate={{
            scale: 0.8,
            opacity: 1,
            selectScale: 1.2,
            selectRotate: 45,
            rotateY: -50,
            rotateX: -20,
          }}
          initial={{
            scale: 0.8,
            selectScale: 2.99,
          }}
          transition={{ duration: 0.12, type: 'spring', mass: 0.93 }}
          detailProperty={{ rotate: -45 }}
          detailTransition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
};

const styles = css.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 80,
    alignItems: 'center',
    minHeight: 560,
  },

  toggle: {
    position: 'relative',
    zIndex: 20,
    alignSelf: 'flex-end',
    font: 'inherit',
    color: 'rgb(117, 117, 117)',
    ':hover': {
      color: '#515151',
      textDecoration: 'underline',
    },
  },

  images: {
    cursor: 'pointer',
  },

  rotate: {
    transform: 'rotate(-45deg)',
  },
});
