
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {

  return (
    <section className='grid'>
      <article className='tag initial'>
        <p>&lt;&gt;</p>
      </article>
      <article className='c2xr1 text one'>
        <p>Durante a minha vida profissional tanto na indústria como na consultoria e gestão de serviços, deparei-me constantemente com a necessidade de otimizar processos e utilizar a tecnologia para alcançar melhores resultados.</p>
      </article>
      <figure className='c2xr1'>
        <img src="/images/computer.jpg" alt="computer"/>
      </figure>
      <figure className='c1xr2'>
        <img src="/images/vscode.jpg" alt="vscode"/>
      </figure>
      <article className='c1xr2 welcome'>
        <img src="/images/fundo_rosa.png" alt="design" />
        <p className='title'>Bem-vindo!</p>
      </article>
      <figure className='c2xr2'>
        <img src="/images/programming.jpg" alt="to-program"/>
      </figure>
      <article className='c2xr1 text two'>
        <p>Surgindo a necessidade de colaborar com desenvolvedores de software numa indústria conserveira para criar uma aplicação de controlo do processo e eficiência do mesmo, suscitou a minha curiosidade pela área.</p>
      </article>
      <figure className='www'>
        <img src="/images/www.jpg" alt="web"/>
      </figure>
      <article className='c2xr1 text three'>
        <p>A fase pandémica, onde a tecnologia foi o nosso maior suporte a todos os níveis, foi o gatilho para procurar mais informação e conhecimento na área. Assim, propus-me a formação especializada para aprimorar as minhas habilidades e conhecimentos.</p>
      </article>
      <article className='c5xr1 contact'>
      <img className='left-image' src="/images/fundo_roxo.png" alt="design" />


        <p><FontAwesomeIcon icon={faEnvelope} /> info@filipaferreira.dev</p>
        <p><FontAwesomeIcon icon={faLinkedin} /> Linkedin</p>

        <img className='right-image' src="/images/fundo_roxo2.png" alt="design" />

      </article>
      <article className='tag'>
        <p>&lt;/&gt;</p>
      </article>
    </section>
  )
}