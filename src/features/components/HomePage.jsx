
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import Menu from './Menu';
import { Link } from 'react-router-dom';


export default function HomePage() {

  // efeitos nas imagens
  useEffect(() => {
    const imageElements = document.querySelectorAll('.grid img');
    gsap.to(imageElements, {
      filter: 'blur(3px)',
      scale: 0.5,
      duration: 1,
      stagger: 0.5,
      ease: 'power1.out',
      onComplete: function() {
        gsap.to(imageElements, {
          filter: 'blur(0px)',
          scale: 1,
          duration: 1,
          ease: 'power1.out'
        });
      }
    });
  }, []);

// aplicar "escrita" nos paragrafos de texto
  const textRef = useRef();

  useEffect(() => {
    const elements = document.querySelectorAll('.text p');

    gsap.fromTo(
      elements,
      { width: 0 },
      { duration: 1, width: '100%', ease: 'power1.inOut', stagger: 1 }
    );
  }, []);

  //hamburguer menu -> criada componente Menu.jsx


  return (
    <section>
    <header>
      <img className='logo' src="images/logo.png" alt="logo" />
      <h1>&lt;Filipa Ferreira/&gt;</h1>
      <Menu/>
    </header>
    <section className='grid'>
      <article className='tag'>
        <p>&lt;&gt;</p>
      </article>
      <article className='c2xr1 text'>
        <p ref={textRef}>Durante a minha vida profissional tanto na indústria como na gestão de serviços, deparei-me constantemente com a necessidade de otimizar processos e utilizar a tecnologia para alcançar melhores resultados.</p>
      </article>
      <figure className='c2xr1'>
        <img src="images/computer.jpg" alt="computer"/>
      </figure>
      <figure className='c1xr2'>
        <img src="images/vscode.jpg" alt="vscode"/>
      </figure>
      <article className='c1xr2 welcome'>
        <p className='title'>Bem-vindo!</p>
      </article>
      <figure className='c2xr2'>
        <img src="images/programming.jpg" alt="to-program"/>
      </figure>
      <article className='c2xr1 text'>
        <p ref={textRef}>Surgindo a necessidade de colaborar com desenvolvedores de software numa indústria conserveira para criar uma aplicação de controlo do processo e eficiência do mesmo, nasceu a minha curiosidade pela área.</p>
      </article>
      <figure>
        <img src="images/steps.jpg" alt="steps"/>
      </figure>
      <article className='c2xr1 text'>
        <p ref={textRef}>A fase pandémica, onde a tecnologia foi o nosso maior suporte a todos os níveis, foi o gatilho para procurar mais informação e conhecimento na área. Assim, propus-me a formação especializada para aprimorar as minhas habilidades e conhecimentos.</p>
      </article>
      <article className='c5xr1 contact'>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@filipaferreira.dev</p>
        <p><FontAwesomeIcon icon={faPhone} /> +351 93 83 22 319</p>
      </article>
      {/* <article>
      <Link className='form-grid' to="/contactForm">Formulário de contato<FontAwesomeIcon icon={faHandPointer} /></Link>
        <p></p>
      </article>
      <article className='c2xr1 welcome'>
        <h1 className='title'>Obrigada pela atenção!</h1>
      </article> */}
      <article className='tag'>
        <p>&lt;/&gt;</p>
      </article>
    </section>
    </section>
  )
}