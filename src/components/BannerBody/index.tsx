import React from 'react';

import { Container, ContainerContent, ContainerLogo, LogoHome } from './styles';

const BannerBody: React.FC = () => {
  return (
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
