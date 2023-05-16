import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function SkillsDescription() {

    let params = useParams();
    let navigate = useNavigate();

    let skill = useSelector(state=>state.softSkills.skills.find(s => s.id == params.id));

    function handleGoBack() {
      navigate(-1);
  }
  return (
    <article>
        <button onClick={handleGoBack}>back</button>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
        
    </article>
  )
}
