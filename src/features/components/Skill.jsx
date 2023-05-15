
import { Link } from 'react-router-dom';

export default function Skill({skill}) {

    

    let {id, title, imageUrl} = skill;

    // console.log(skill);

  return (
    <article>
        <Link to={`/description/${id}`}>
        <h1>{title}</h1>
        </Link>
        <img src={`/images/${imageUrl}`} alt={title}/>
    </article>
  )
}
