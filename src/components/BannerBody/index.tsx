import React from 'react';

import { Container, ContainerContent, ContainerLogo, LogoHome } from './styles';
import styled from 'styled-components';

const BannerBody: React.FC = () => {
  // function parallax(element: EventTarget, distance: number, speed: number) {
  //   element.style.transform = translateY(`${distance - speed}px`);
  // }

  // function handleScroll(e: Event) {
  //   let element = e.target;
  //   parallax('header', window.scrollY, 1);
  //   parallax('.small-rose', window.scrollY, 0.4);
  //   parallax('.big-rose', window.scrollY, 0.2);
  // }

  return (
    // <Container onScroll={handleScroll}>
    <Container>
      <ContainerContent className="content">
        <p>be bride</p>
        <span>ASSESSORIA E CERIMONIAL</span>
      </ContainerContent>
      <ContainerLogo>
        <LogoHome src="/images/love.svg" />
      </ContainerLogo>
    </Container>
  );
};

export default BannerBody;
