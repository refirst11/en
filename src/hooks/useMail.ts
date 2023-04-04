import { useState } from 'react';

export const useMail = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const Submit = async () => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `
Username
${name}

Mail
${mail}

Message
${message}
`,
    });
  };

  return {
    name,
    setName,
    mail,
    setMail,
    message,
    setMessage,
    Submit,
  };
};
