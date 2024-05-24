import React from 'react';
import { HeroContainer, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroSectionStyle';
// import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer >
          <HeroLeftContainer id="Left">
            <Title>Olá, me chamo <br /> {Bio.name}</Title>
            <TextLoop>
              -
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Ver curriculo</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            {/* <Img src={HeroImg} alt="hero-image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default HeroSection