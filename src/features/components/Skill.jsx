import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Skill({skill}) {

    let dispatch = useDispatch();

    let {id, title, imageUrl, description} = skill;

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
