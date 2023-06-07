import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function SkillsDescription() {

    let params = useParams();
    let navigate = useNavigate();

    let skill = useSelector(state => state.softSkills.softSkills.find(s => s.id == params.id));

    function handleGoBack() {
      navigate(-1);
  }

  const paragraphs = skill.description.split('\n');

  return (
    <article className="skills-description">
        
        <h3>{skill.title}</h3>
         {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph === '---' ? <hr /> : <p>{paragraph}</p>}
          </React.Fragment>
        ))}
      <button onClick={handleGoBack}>Regressar</button>
    </article>
  )
}
