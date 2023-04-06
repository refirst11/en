'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMail } from 'hooks/useMail';
import RouterBack from 'components/RouterBack';
import Image from 'next/image';
import profilePic from '@public/alum.png';

const Mail = (): JSX.Element => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);
  const [useInitialize, setInitialize] = useState(true);

  const Send = async (): Promise<void> => {
    const isValid = validateEmail(mail);
    isValid &&
      (await Submit(),
      [setMail, setName, setMessage].map((setState) =>
        setTimeout(() => {
          setState('');
        }, 1000)
      ));
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
      <AnimatePresence mode="wait">
        <motion.div
          onClick={() => setInitialize(!useInitialize)}
          initial={{ opacity: 1, scale: 1, y: -2 }}
          animate={{ opacity: 1, scale: 1, y: 2 }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 1 }}
        >
          <label htmlFor="status" className="error_style">
            {error === null ? '' : error === false ? 'complete' : 'email is required for available'}
          </label>
        </motion.div>
      </AnimatePresence>

      <label htmlFor="name">Name*</label>
      <input
        className="input"
        value={name}
        type="text"
        name="name"
        aria-label="Name area"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Mail*</label>
      <input
        className="input"
        value={mail}
        type="text"
        name="name"
        aria-label="Name area"
        onChange={(e) => setMail(e.target.value)}
        required
      />

      <label htmlFor="massage">Message*</label>
      <textarea
        className="textarea"
        value={message}
        name="massage"
        aria-label="Massage area"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div onClick={Send} className={`massageButton ${error === false ? 'noAction' : null}`}>
        {error === null ? 'Submit' : error === false ? 'Success!' : 'Retry!'}
      </div>
    </form>
  );

  return (
    <div className="Mail">
      <RouterBack />
      <div className="layout_center_content">
        <Image className="visited_icon" src={profilePic} alt="art" quality={100} width={80} height={80} />
        <div className="success">success!!</div>
      </div>
      {error === null ? (
        MailFormDom
      ) : error === false ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {MailFormDom}
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            onClick={() => setInitialize(!useInitialize)}
            initial={{ opacity: 1, scale: 1, x: -5 }}
            animate={{ opacity: 1, scale: 1, x: 5 }}
            exit={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 1, bounce: 1 }}
          >
            {MailFormDom}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Mail;
