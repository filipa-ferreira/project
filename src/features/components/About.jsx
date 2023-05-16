import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { getHardSkills } from "../hardSkills/hardSkillsSlice";
import { getSkills } from "../softSkills/skillsSlice";
import HardSkillsList from "./HardSkillsList";
import SkillsList from "./SkillsList";


export default function About() {

    let dispatch = useDispatch();

    const [error, setError] = useState();

    useEffect(()=>{
        fetch ('http://localhost:3000/softSkills')
        .then(resp => resp.json())
        .then(data => dispatch(getSkills(data)))
        .catch((error) => {
          console.log("Ocorreu um erro:", error);
          setError("Ocorreu um erro. Tente novamente mais tarde.");
        });
    }, []);

    useEffect(()=>{
      fetch ('http://localhost:3000/hardSkills')
      .then(resp => resp.json())
      .then(data => dispatch(getHardSkills(data)))
      .catch((error) => {
        console.log("Ocorreu um erro:", error);
        setError("Ocorreu um erro. Tente novamente mais tarde.");
      });
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