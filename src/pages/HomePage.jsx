
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
        <p>Com uma sólida experiência na indústria e consultoria de serviços, encontrei constantemente a necessidade de otimizar processos e utilizar a tecnologia para impulsionar resultados. </p>
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
        <p>A colaboração com desenvolvedores de software num projeto para a indústria conserveira despertou a minha curiosidade pela área e a fase pandémica reforçou a importância da tecnologia em todos os níveis.</p>
      </article>
      <figure className='www'>
        <img src="/images/www.jpg" alt="web"/>
      </figure>
      <article className='c2xr1 text three'>
        <p>Após formação especializada, estou pronta para ajudar no desenvolvimento dos seus projetos.</p>
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