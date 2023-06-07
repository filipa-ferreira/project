import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/skills.css';
import HardSkill from './HardSkill';
import { getHardSkills } from "../hardSkills/hardSkillsSlice";


export default function HardSkillsList() {
  // const hardSkills = useSelector(state => state.hardSkills.hardSkills);
  const dispatch = useDispatch();
  const hardSkills = useSelector((state) => state.hardSkills.hardSkills);
  const loading = useSelector((state) => state.hardSkills.loading);
  const error = useSelector((state) => state.hardSkills.error);

  useEffect(() => {
    dispatch(getHardSkills());
  }, [dispatch]);

  return (
    <section className='container-hard-skills'>
    <section className="grid-skills">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred.</p>
      ) : (
        hardSkills.map((skill) => (
          <HardSkill
            key={skill.id}
            title={skill.title}
            imageUrl={skill.imageUrl}
          />
        ))
      )}
    </section>
  </section>
);
};