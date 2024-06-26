import React, { useState, useRef } from 'react';
import { send } from 'emailjs-com';

function Email() {
  const formRef = useRef(null);
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const [sendStatus, setsendStatus] = useState('pending');

  const onSubmit = (e) => {
    e.preventDefault();
    setsendStatus('pending');
    send('service_hroqw69', 'template_pjgma6i', toSend, 'hK7Eob7-4zb7IqtbQ')
    //serviceid,templateid, userid
      .then((response) => {
        console.log('Email sent successfully:', response);
        setsendStatus('success')
        setToSend({...toSend, from_name: '', message: '', reply_to: 'marie5joiner@gmail.com'})
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setsendStatus('error');
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
  <div>
    <div className="App">
      <form onSubmit={onSubmit} ref={formRef}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Message for admin"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          type="password"
          name="reply_to"
          placeholder="Your Email"
          value="marie5joiner@gmail.com"
          onChange={handleChange}
        />
        <button type="submit">Send Email</button>
      </form>
      {sendStatus === 'success' && <p>Email sent successfully!</p>}
      {sendStatus === 'error' && <p>Error sending email. Please try again.</p>}
    </div>
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
   </div>
  );
}

export default Email;