import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/skills.css';
import HardSkill from './HardSkill';

export default function HardSkillsList() {
  const hardSkills = useSelector(state => state.hardSkills.hardSkills);

  return (
    <section className='container-hard-skills'>
    <section className="grid-skills">
      {hardSkills.map(skill => (
        <HardSkill key={skill.id} title={skill.title} imageUrl={skill.imageUrl} />
      ))}
    </section>
    </section>
  );
}
