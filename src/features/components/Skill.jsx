
import { Link } from 'react-router-dom';

export default function Skill({skill}) {

    

    let {id, title, imageUrl} = skill;

    // console.log(skill);

  return (
    <article>
        <Link className="link-no-underline" to={`/description/${id}`}>
        <h3 className='skill-title'>{title}</h3>
        <img className='skills' src={`/images/${imageUrl}`} alt={title}/>
        </Link>
    </article>
  )
}
