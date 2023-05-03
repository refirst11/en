'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMail } from 'hooks/useMail';
import RouterBack from 'components/RouterBack';
import Image from 'next/image';
import profilePic from '@public/alum.png';
import styles from './styles.module.scss';

const Mail = (): JSX.Element => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);
  const [useInitialize, setInitialize] = useState(true);

  const Send = async (): Promise<void> => {
    const isValid = validateEmail(mail);
    isValid &&
      (await Submit(),
      setTimeout(() => {
        setMail(''), setName(''), setMessage('');
      }, 1400));
    setError(!isValid);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };

  useEffect(() => {
    return setError(null);
  }, [useInitialize]);

  const MailFormDom = (
    <form>
      <motion.div
        onClick={() => setInitialize(!useInitialize)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      >
        <label htmlFor="status" className={styles.error_style}>
          {error === null ? '' : error === false ? 'complete' : '*email is required for available'}
        </label>
      </motion.div>

      <label htmlFor="name">Name*</label>
      <div className={styles.area_container}>
        <input
          value={name}
          type="text"
          name="name"
          aria-label="Name area"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <label htmlFor="email">Mail*</label>
      <div className={styles.area_container}>
        <input
          value={mail}
          type="text"
          name="name"
          aria-label="Name area"
          onChange={(e) => setMail(e.target.value)}
          required
        />
      </div>

      <label htmlFor="massage">Message*</label>
      <div className={styles.area_container}>
        <textarea
          value={message}
          name="massage"
          aria-label="Massage area"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div onClick={Send} className={styles.massageButton}>
        {error === null ? 'Submit' : error === false ? 'Success!' : 'Retry!'}
      </div>
    </form>
  );

  return (
    <div className={styles.mobile_width}>
      <RouterBack />
      <div className={styles.fit_icons}>
        <Image className={styles.visited_icon} src={profilePic} alt="art" quality={100} width={80} height={80} />
        <div className="success">success!!</div>
      </div>
      {error === null ? (
        <AnimatePresence mode="wait">{error === null && <motion.div>{MailFormDom}</motion.div>}</AnimatePresence>
      ) : error === false ? (
        <AnimatePresence mode="wait">
          {!error && (
            <motion.div
              key="1"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {MailFormDom}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="2"
              onClick={() => setError(null)}
              animate={{ y: -4, transition: { type: 'spring', duration: 1, bounce: 1 } }}
              exit={{ y: 0 }}
            >
              {MailFormDom}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Mail;
