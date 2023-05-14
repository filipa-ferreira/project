import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function SkillsDescription() {

    let params = useParams();
    let navigate = useNavigate();

    let skill = useSelector(state=>state.list.skills.find(s => s.id == params.id));
  return (
    <article>
        <button onClick={() => navigate(-1)}>back</button>
        <h1>{skill.title}</h1>
        <p>{skill.description}</p>
        
    </article>
  )
}
