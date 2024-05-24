import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavBarStyledComponent';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { FaCode, FaBars } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: '20', cursor: 'pointer' }}>
            <FaCode size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen);
          }} />
        </MobileIcon>

        <NavItems>
          <NavLink href='#about'>Sobre</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#experience'>Experiências</NavLink>
          <NavLink href='#projects'>Projetos</NavLink>
          <NavLink href='#education'>Educação</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">GitHub</GitHubButton>
        </ButtonContainer>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Sobre</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experiências</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projetos</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Educação</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar