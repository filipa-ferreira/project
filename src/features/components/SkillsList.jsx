import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSoftSkills } from "../softSkills/skillsSlice";
import '../../styles/skills.css';
import Skill from './Skill';

export default function SkillsList() {

    // const {skills} =useSelector(state=>state.softSkills);
    const dispatch = useDispatch();
    const softSkills = useSelector((state) => state.softSkills.softSkills);
    const loading = useSelector((state) => state.softSkills.loading);
    const error = useSelector((state) => state.softSkills.error);

    useEffect(() => {
      dispatch(getSoftSkills());
    }, [dispatch]);


  return (
    <section className='container-soft-skills'>
      <section className='grid-skills'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error occurred.</p>
        ) : (
          softSkills.map((skill) => <Skill key={skill.id} skill={skill} />)
        )}
      </section>
    </section>
  );
};
