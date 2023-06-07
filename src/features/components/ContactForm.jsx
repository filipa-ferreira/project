
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
      formContent =
      <div>
        <p className='success'>Obrigado pelo seu contacto!</p>
        <img src="/images/thank-you.png" alt="thank you" />
      </div>
      break;
    case 'error':
      formContent =
      <p className='error'>Ocorreu um erro, tente novamente mais tarde.</p>;
      break;
    default:
      formContent = (
        <form ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Mensagem</label>
          <textarea name="message" />
          <input type="submit" value="Enviar" />
        </form>
      );
  }

  return (
    <section className='form'>
      <h1>Formulário de contacto</h1>
      {formStatus !== 'success' && (
      <article className='intro-form'>
      <p>Bem-vindo ao meu formulário de contacto!</p>
      <p>Se tiver alguma pergunta, sugestão ou oportunidade de colaboração, não hesite em contactar.</p>
      </article>
      )}
      {formContent}
      
    </section>
  );
}