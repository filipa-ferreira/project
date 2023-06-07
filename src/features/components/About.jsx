
import HardSkillsList from "./HardSkillsList";
import SkillsList from "./SkillsList";

export default function About() {
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