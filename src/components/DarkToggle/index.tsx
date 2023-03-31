'use client';

import { Fragment, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import styles from 'styles/components/DarkToggleStyles';

export const ToggleDarkMode = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      (typeof window !== 'undefined' && 'localStorage' in window && localStorage.theme === 'dark') ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleChangeDarkMode = () => {
    if (!darkMode) {
      setDarkMode(true);
      localStorage.theme = 'dark';
    } else {
      setDarkMode(false);
      localStorage.theme = 'light';
    }
  };

  const currentTime = new Date().getHours();
  const midNight = currentTime > 19 && currentTime < 22;

  return (
    <Fragment>
      {midNight && (
        <div className="togglePosition">
          <AnimatePresence mode="wait">
            <motion.button
              className="flex_box"
              key={darkMode ? 'dark' : 'light'}
              onClick={handleChangeDarkMode}
              tabIndex={0}
              aria-label="Dark or Light ToggleButton"
              initial={{ y: -20, x: 20 }}
              animate={{ y: 0, x: 0 }}
              exit={{ y: -20, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="sizing"
                key={darkMode ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <IoMdMoon size={20} color="lightblue" /> : <IoMdSunny size={20} color="FFC666" />}
              </motion.div>
            </motion.button>
          </AnimatePresence>
        </div>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ToggleDarkMode;
