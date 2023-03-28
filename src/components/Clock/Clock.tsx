'use client';

import { useState, useEffect, Fragment } from 'react';
import styles from 'styles/components/ClockStyles';

const Clock = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTimeString = () => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        second: undefined,
      });
      setTimeString(currentTime);
    };

    updateTimeString();

    const intervalId = setInterval(updateTimeString, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fragment>
      <div className="clock">{timeString}</div>
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default Clock;
