'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMail } from 'hooks/useMail';
import Seo from 'components/Seo';
import Animate from 'components/Animation';

const Page = (): JSX.Element => {
  const { mail, setMail, name, setName, message, setMessage, Submit } = useMail();
  const [error, setError] = useState<null | boolean>(null);
  const [useInitialize, setInitialize] = useState(true);

  const Send = (): void => {
    if (validateEmail(mail) === true) {
      Submit();
      setMail('');
      setName('');
      setMessage('');
    } else false;
  };

  const validateEmail = (checkString: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(checkString) === true) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  useEffect(() => {
    setError(null);
  }, [useInitialize]);

  const MailFormDom = (
    <form>
      <AnimatePresence mode="wait">
        <motion.div
          onClick={() => setInitialize(!useInitialize)}
          initial={{ opacity: 1, scale: 1, x: -5 }}
          animate={{ opacity: 1, scale: 1, x: 5 }}
          exit={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1, bounce: 1 }}
        >
          <label htmlFor="status">
            {error === null ? '' : error === false ? 'd0n3s' : 'email is required for available'}
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

      <label htmlFor="massage">Message</label>
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
    <Animate className="Mail wrapper">
      <Seo title="su-pull - mail" description="My Mail" />
      <div className="wrapper Card">
        <div className="Card CardBox">
          <div className="TwitterTexts">success!!</div>
          <img className="Circle" src="/picture/Nanamin240.png" width={80} height={80} />
          <div className="CardTexts">please wait for my reply</div>
        </div>
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
    </Animate>
  );
};

export default Page;
