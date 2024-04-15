import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xsozc4j', 'template_tyk1jod', form.current, 'iLnbTW6HmFfR5ON8A3OoF')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
