import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/skills.css';
import Skill from './Skill';

export default function SkillsList() {

    const {skills} =useSelector(state=>state.softSkills);


  return (
    <section className='grid-skills'>
        {
            skills.map(s => <Skill
                            key={s.id}
                            skill={s}
                            />)
        }
    </section>
  )
}
