import React from 'react';

import {
  Container,
  ContainerContent,
  ContainerLogo,
  LogoHome,
  Btn
} from './styles';

const BannerBody: React.FC = () => {
  return (
    <Container>
      <ContainerContent className="content">
        <h1>be bride</h1>
        <p>Vem casar com a gente.</p>

        <Btn href="#" className="btn">
          #vamosjuntas?
        </Btn>
      </ContainerContent>{' '}
      <ContainerLogo>
        <LogoHome src="/images/wedding.svg" />
      </ContainerLogo>
    </Container>
  );
};

export default BannerBody;
