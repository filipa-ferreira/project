import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getSkills } from "../skills/skillsSlice";
import SkillsList from "./SkillsList";




export default function About() {

    let dispatch = useDispatch();

    useEffect(()=>{
        fetch ('http://localhost:3000/skills')
        .then(resp => resp.json())
        .then(data => dispatch(getSkills(data)))
        .catch (error => console.log('ocorreu um erro'));
    }, []);


  return (
    <section>
        <h1>Dashboard das skills</h1>
        <SkillsList/>
    </section>
  )
}
