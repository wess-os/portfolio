import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectsCards';
import { projects } from '../../data/constants';

const Projects = ({openModal,setOpenModal}) => {

  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Aqui estão alguns dos projetos que trabalhei durante a minha carreira.
        </Desc>
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects