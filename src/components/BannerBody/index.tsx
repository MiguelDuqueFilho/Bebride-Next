import React from 'react';

import logoBebride from '../../assets/images/Bebride_Hand1.png';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Container,
  ContainerContent,
  ContainerLogo,
  LogoHome,
  LogoImage,
  ContainerWhatsApp,
  ButtonWhatsApp
} from './styles';

const BannerBody: React.FC = () => {
  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }

  return (
    <Container>
      <ContainerContent className="content">
        <LogoImage src={logoBebride} alt="Logo Bebride" />
        <p>BE BRIDE</p>
        <span>ASSESSORIA E CERIMONIAL</span>
        <ContainerWhatsApp>
          <ButtonWhatsApp type="button" onClick={onWhatsapp}>
            <FaWhatsapp size={34} />
            #vamosjuntas?
          </ButtonWhatsApp>
        </ContainerWhatsApp>
      </ContainerContent>
      <ContainerLogo>
        <LogoHome src="/images/wedding.svg" />
      </ContainerLogo>
    </Container>
  );
};

export default BannerBody;
