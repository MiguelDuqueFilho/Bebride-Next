import React from 'react';

import {
  Container,
  FooterWrap,
  WrapContainer,
  FooterTitle,
  Foot,
  FootWrap,
  Clear
} from './styles';

const Footer: React.FC = () => {
  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }
  return (
    <footer>
      <Container>
        <FooterWrap>
          <WrapContainer>
            <FooterTitle>Conheça-nos</FooterTitle>
            <ul>
              <li>
                <a href="#" title="Informações Corporativas">
                  Informações Corporativas
                </a>
              </li>
              <li>
                <a href="#" title="Mapa">
                  Mapa
                </a>
              </li>
              <li>
                <a href="#" title="Razão Social">
                  Razão Social
                </a>
              </li>
              <li>
                <a href="#" title="CNPJ">
                  CNPJ
                </a>
              </li>
              <li>
                <a title="Celular">Celular</a>
              </li>
            </ul>
          </WrapContainer>
          <WrapContainer>
            <FooterTitle>Redes Sociais</FooterTitle>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/bebridecasamentos"
                  title="Facebook"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bebridecasamentos"
                  title="Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bebride_" title="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a title="Whatsapp" onClick={onWhatsapp}>
                  Whatsapp
                </a>
              </li>
            </ul>
          </WrapContainer>
          <WrapContainer>
            <FooterTitle>Informações</FooterTitle>
            <ul>
              <li>
                <a href="#" title="Contato">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" title="Sobre">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" title="Login">
                  Login
                </a>
              </li>
              <li>
                <a href="#" title="Recuperar a Senha">
                  Recuperar a Senha
                </a>
              </li>
              <li>
                <a href="#" title="Área do Cliente">
                  Área do Cliente
                </a>
              </li>
            </ul>
          </WrapContainer>
          <Clear></Clear>
        </FooterWrap>
      </Container>
      <Foot>
        <FootWrap>
          MDuque &copy; 2020
          {/* <a href="#">MDUQUE</a> */}
        </FootWrap>
      </Foot>
    </footer>
  );
};

export default Footer;
