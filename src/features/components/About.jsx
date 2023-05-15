import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getSkills } from "../softSkills/skillsSlice";
import SkillsList from "./SkillsList";


export default function About() {

    let dispatch = useDispatch();

    useEffect(()=>{
        fetch ('http://localhost:3000/softSkills')
        .then(resp => resp.json())
        .then(data => dispatch(getSkills(data)))
        .catch (error => console.log('ocorreu um erro'));
    }, []);




  return (
    <section>
        <h2>Soft Skills</h2>
        <SkillsList/>
    </section>
  )
}