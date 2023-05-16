import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHardSkills } from "../hardSkills/hardSkillsSlice";
import { getSkills } from "../softSkills/skillsSlice";
import HardSkillsList from "./HardSkillsList";
import SkillsList from "./SkillsList";


export default function About() {

    let dispatch = useDispatch();

    useEffect(()=>{
        fetch ('http://localhost:3000/softSkills')
        .then(resp => resp.json())
        .then(data => dispatch(getSkills(data)))
        .catch (error => console.log('ocorreu um erro'));
    }, []);

    useEffect(()=>{
      fetch ('http://localhost:3000/hardSkills')
      .then(resp => resp.json())
      .then(data => dispatch(getHardSkills(data)))
      .catch (error => console.log('ocorreu um erro'));
  }, []);


  return (
    <section className="grid-container">
      <div className="row">
        <h2 className="soft-skills">Soft Skills</h2>
        <SkillsList/>
      </div>
      <div className="row">
        <h2 className="hard-skills">Hard Skills</h2>
        <HardSkillsList/>
      </div>

    </section>
  )
}