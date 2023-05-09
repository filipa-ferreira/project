
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/form.css';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState();
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_doxtqid', 'template_hqw2kyc', form.current, 'aESYrZhao2ydSdjsa')
      .then((result) => {
        setFormStatus('success');
      }, (error) => {
        setFormStatus('error');
      });
  };

  let formContent = null;
  switch (formStatus) {
    case 'success':
      formContent = <p className='success'>Obrigado pelo seu contato!</p>;
      break;
    case 'error':
      formContent = <p className='error'>Ocorreu um erro, tente novamente mais tarde.</p>;
      break;
    default:
      formContent = (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
  }

  return (
    <section className='form'>
      <h1>Formulário de contato</h1>
      {formContent}
    </section>
  );
}
