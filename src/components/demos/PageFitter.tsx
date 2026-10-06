'use client';

import { useState } from 'react';
import * as css from '@plumeria/core';
import useFitter from 'react-page-fitter';
import { Fukuwarai } from 'react-fukuwarai';
import { PiDogLight } from 'react-icons/pi';

export const PageFitter = () => {
  const [viewport, setViewport] = useState(false);
  const isFit = useFitter('#fuku', { parentBox: !viewport ? '#room' : undefined });

  return (
    <div id="room" classStyle={[styles.room, !viewport && styles.outline]}>
      <div>isFit → {isFit === undefined ? 'undefined' : String(isFit)}</div>
      <button classStyle={[styles.view, viewport && styles.outline]} onClick={() => setViewport(!viewport)}>
        viewport
      </button>
      <Fukuwarai>
        <PiDogLight className={css.use(styles.dog)} size={120} />
      </Fukuwarai>
    </div>
  );
};

const styles = css.create({
  room: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 400,
    marginBlock: '16px',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
  },

  outline: {
    borderColor: 'skyblue',
  },

  view: {
    position: 'absolute',
    top: 8,
    padding: '4px 8px',
    font: 'inherit',
    color: 'rgb(117, 117, 117)',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
  },

  dog: {
    position: 'relative',
    zIndex: 3,
    cursor: 'pointer',
  },
});
