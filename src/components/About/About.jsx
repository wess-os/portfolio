import styles from './About.module.css';

function About() {

  return (

    <section id="about" className={styles.container}>
      <h1 className="sectionTitle">Sobre</h1>
      <p>
        Sou um programador apaixonado por tecnologia, com mais de um ano
        de estudo na área e experiência em desenvolvimento de sistemas. <br/>
        Sou dedicado, profissional e sempre em busca de aprendizado. <br/>
        Possuo habilidades em diversas tecnologias, desde Docker e Git
        até PHP, NodeJS e ReactJS. <br/>
        Tenho facilidade em resolver problemas, garantindo qualidade de
        software e aplicando habilidades analíticas em meu trabalho. <br/>
      </p>
    </section>

  );

}

export default About;