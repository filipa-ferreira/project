
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { getHardSkills } from "../hardSkills/hardSkillsSlice";
import { getSkills } from "../softSkills/skillsSlice";
import HardSkillsList from "./HardSkillsList";
import SkillsList from "./SkillsList";


export default function About() {

    let dispatch = useDispatch();

    const [error, setError] = useState();//criar state para o erro

    //requisição da data.json:
    useEffect(() => {
      fetch("http://localhost:4002/api/data")
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(getSkills(data.softSkills));
          dispatch(getHardSkills(data.hardSkills));
        })
        .catch((error) => {
          console.log("Ocorreu um erro:", error);
          setError("Ocorreu um erro. Tente novamente mais tarde.");
        });
    }, []);


  return (
    <article>
   
   <section className="header-skills">
    <section className="foto">
    <img className="fundo" src="/images/fundo.png" alt="fundo" />
    <img className="filipa" src="/images/filipa.png" alt="filipa" />
    </section>

    <section>
      <h4 className="hi">Olá! Sou a Filipa, front-end developer junior, e estou animada para trabalhar no seu próximo projeto. </h4>
      <br />
      <p className="developer">Estusiasmada com o mundo de desenvolvimento web, estou sempre em busca de aprimorar as minhas habilidades. Tenho uma mentalidade aberta para encarar novos desafios e estou motivada a aplicar todas as minhas habilidades.</p>
    </section>

    </section>

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
    </article>
  )
}