'use client';

import * as css from '@plumeria/core';
import { TextScaler as Scaler } from 'react-text-scaler';

export const TextScaler = () => {
  return <Scaler className={css.use(styles.scaler)} scaleRange={20} stickSize={10} />;
};

const styles = css.create({
  scaler: {
    marginBlock: '24px',
  },
});
