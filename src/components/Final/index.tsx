import React from 'react';

import {
  Container,
  ContainerTitle,
  TeamSocial,
  SocialIcon,
  LogoImage
} from './styles';

import logo from '../../assets/images/LogoBeBride3hand.png';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Final: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <h2>
          <span>SEU CASAMENTO É ÚNICO E TEM QUE SER PERFEITO</span>
          <p>Vamos juntas?</p>
        </h2>
        <TeamSocial>
          <SocialIcon href="https://www.facebook.com/bebridecasamentos">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/bebridecasamentos">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/bebride_">
            <FaTwitter />
          </SocialIcon>
        </TeamSocial>
        <LogoImage src={logo} alt="logo BeBride" />
      </ContainerTitle>
    </Container>
  );
};

export default Final;
