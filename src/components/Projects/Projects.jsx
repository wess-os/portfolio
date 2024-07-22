import styles from './Projects.module.css';
import nodeIcon from '../../assets/node.png';
import pythonIcon from '../../assets/python.png';
import nestIcon from '../../assets/nest-js-icon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {

  return (

    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nestIcon}
          link="https://github.com/wess-os/api_nest_pg_docker"
          h3="API NestJS"
          p="CRUD API"
        />
        <ProjectCard
          src={nodeIcon}
          link="https://github.com/wess-os/api_node_mysql_docker"
          h3="API NodeJS"
          p="CRUD API"
        />
        <ProjectCard
          src={pythonIcon}
          link="https://github.com/wess-os/api_flask_python"
          h3="API Python"
          p="CRUD API"
        />
      </div>
    </section>

  );
  
}

export default Projects;