import {
  Container,
  FormContainer,
  FormSignin,
  FormSignup,
  Title,
  ContainerIcon,
  InputField,
  Input,
  BtnSubmit,
  BtnTransparent,
  SocialText,
  SocialMedia,
  SocialIcon,
  SigninUp,
  PanelsContainer,
  PanelLeft,
  PanelRight,
  PanelContentLeft,
  PanelContentRight,
  ImageLeft,
  ImageRight
} from './styles';

import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';

import { useState } from 'react';

const SignInOut: React.FC = () => {
  const [mode, setMode] = useState('');

  const handleClickRegister = () => {
    setMode('sign-up-mode');
  };
  const handleClickLogin = () => {
    setMode('');
  };

  return (
    <Container className={mode}>
      <FormContainer className="forms-container">
        <SigninUp className={`signin-sign-out ${mode}`}>
          <FormSignin action="#" className={`signin-in-form ${mode}`}>
            <Title className="title">Login</Title>
            <InputField className="input-field">
              <ContainerIcon>
                <FaUser />
              </ContainerIcon>
              <Input type="text" placeholder="Usuário" />
            </InputField>
            <InputField className="input-field">
              <ContainerIcon>
                <FaLock />
              </ContainerIcon>
              <Input type="password" placeholder="Senha" />
            </InputField>
            <BtnSubmit type="submit" value="Login" className="btn solid" />
            <SocialText className="social-text">
              ou Login com plataforma de mídia social
            </SocialText>
            <SocialMedia className="social-media">
              <SocialIcon href="#" className="social-icon">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaGoogle />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaLinkedinIn />
              </SocialIcon>
            </SocialMedia>
          </FormSignin>
          <FormSignup action="#" className={`signin-up-form ${mode}`}>
            <Title className="title">Registrar</Title>
            <InputField className="input-field">
              <ContainerIcon>
                <FaUser />
              </ContainerIcon>
              <Input type="text" placeholder="Usuário" />
            </InputField>
            <InputField className="input-field">
              <ContainerIcon>
                <FaEnvelope />
              </ContainerIcon>
              <Input type="text" placeholder="Email" />
            </InputField>
            <InputField className="input-field">
              <ContainerIcon>
                <FaLock />
              </ContainerIcon>
              <Input type="password" placeholder="Senha" />
            </InputField>
            <BtnSubmit type="submit" className="btn" value="SignUp" />
            <SocialText>ou Registre com plataforma de mídia social</SocialText>
            <SocialMedia className="social-media">
              <SocialIcon href="#" className="social-icon">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaGoogle />
              </SocialIcon>
              <SocialIcon href="#" className="social-icon">
                <FaLinkedinIn />
              </SocialIcon>
            </SocialMedia>
          </FormSignup>
        </SigninUp>
      </FormContainer>
      <PanelsContainer className="panels-container">
        <PanelLeft className={`panel left-panel ${mode}`}>
          <PanelContentLeft className={`content ${mode}`}>
            <h3>Novo aqui?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <BtnTransparent
              type="button"
              className="btn transparent"
              value="registrar"
              onClick={handleClickRegister}
            />
          </PanelContentLeft>
          <ImageLeft className={`image ${mode}`} src="/images/LogoLogin.svg" />
        </PanelLeft>
        <PanelRight className={`panel right-panel ${mode}`}>
          <PanelContentRight className={`content ${mode}`}>
            <h3>Um de nós?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <BtnTransparent
              type="button"
              className="btn transparent"
              value="Login"
              onClick={handleClickLogin}
            />
          </PanelContentRight>
          <ImageRight
            className={`image ${mode}`}
            src="/images/logoRegister.svg"
          />
        </PanelRight>
      </PanelsContainer>
    </Container>
  );
};

export default SignInOut;
