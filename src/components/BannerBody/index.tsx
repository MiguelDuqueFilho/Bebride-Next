import React from 'react';

import logoBebride from '../../assets/images/Bebride_Hand1.png';
import BebrideText from '../../assets/images/logo-white.png';

import {
  Container,
  ContainerContent,
  ContainerLogo,
  LogoHome,
  LogoImage
} from './styles';

const BannerBody: React.FC = () => {
  return (
    <Container>
      <ContainerContent className="content">
        {/* <LogoImage src={logoBebride} alt="Logo Bebride" /> */}
        <p>be bride</p>
        <span>ASSESSORIA E CERIMONIAL</span>
      </ContainerContent>
      <ContainerLogo>
        <LogoHome src="/images/wedding.svg" />
      </ContainerLogo>
    </Container>
  );
};

export default BannerBody;
