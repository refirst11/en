import { Fragment, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import styles from 'styles/components/DarkToggleStyles';

export const ToggleDarkMode = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode, setDarkMode]);

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
  const midNight = currentTime > 17 || currentTime < 5;

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      if (midNight) {
        setDarkMode(true);
        localStorage.theme = 'dark';
      } else {
        setDarkMode(false);
        localStorage.theme = 'light';
      }
    }
  }, [darkMode, currentTime, midNight]);

  return (
    <Fragment>
      {midNight && (
        <div className="togglePosition">
          {process.env.NODE_ENV === 'development' && (
            <button
              className="flex_box"
              onClick={handleChangeDarkMode}
              tabIndex={0}
              aria-label="Dark or Light ToggleButton"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  className="sizing"
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ rotate: -90, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {darkMode ? <IoMdMoon size={20} color="lightblue" /> : <IoMdSunny size={20} color="FFC666" />}
                </motion.div>
              </AnimatePresence>
            </button>
          )}
        </div>
      )}
      <style jsx>{styles}</style>
    </Fragment>
  );
};

export default ToggleDarkMode;
