import { Link } from 'react-router-dom/dist';
import '../../styles/notFound.css';


export default function NotFound() {
  return (
    <section className='not-found'>
    <h1>Página não encontrada.</h1>
    <Link to="/" className='not-found-link'>Voltar à página inicial</Link>
    </section>

  )
}
