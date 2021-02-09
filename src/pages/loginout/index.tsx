import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/client';

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

export default function LogInOut() {
  const [mode, setMode] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickRegister = () => {
    setMode('sign-up-mode');
  };
  const handleClickLogin = () => {
    setMode('');
  };

  function onSubmitSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('credentials', { userEmail, password, isNewUser: false });
  }

  function onFacebookSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('facebook');
  }

  function onTwitterSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('twitter', { userEmail, isNewUser: false });
  }

  function onGoogleSignIn(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('google', { userEmail, isNewUser: false });
  }

  function onSubmitSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('credentials', { userName, userEmail, password, isNewUser: true });
  }

  function onFacebookSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('facebook');
  }

  function onTwitterSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('twitter', { userEmail, isNewUser: true });
  }

  function onGoogleSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('google', { userEmail, isNewUser: true });
  }

  return (
    <>
      <Container className={mode}>
        <FormContainer className="forms-container">
          <SigninUp className={`signin-sign-out ${mode}`}>
            <FormSignin
              method="post"
              onSubmit={onSubmitSignIn}
              className={`signin-in-form ${mode}`}
            >
              <Title className="title">Login</Title>
              {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
              <Input type="hidden" name="isNewUser" value={0} />
              <InputField className="input-field">
                <ContainerIcon>
                  <FaUser />
                </ContainerIcon>
                <Input
                  name="userEmail"
                  type="email"
                  placeholder="Usuário"
                  onChange={e => setUserEmail(e.target.value)}
                />
              </InputField>
              <InputField className="input-field">
                <ContainerIcon>
                  <FaLock />
                </ContainerIcon>
                <Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputField>
              <BtnSubmit type="submit" value="Login" className="btn solid" />
              <SocialText className="social-text">
                ou Login com plataforma de mídia social
              </SocialText>
              <SocialMedia className="social-media">
                <SocialIcon onClick={onFacebookSignIn} className="social-icon">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon onClick={onTwitterSignIn} className="social-icon">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon onClick={onGoogleSignIn} className="social-icon">
                  <FaGoogle />
                </SocialIcon>
              </SocialMedia>
            </FormSignin>
            <FormSignup
              method="post"
              onSubmit={onSubmitSignUp}
              className={`signin-up-form ${mode}`}
            >
              <Title className="title">Registrar</Title>
              <Input type="hidden" name="isNewUser" value={1} />
              <InputField className="input-field">
                <ContainerIcon>
                  <FaUser />
                </ContainerIcon>
                <Input
                  name="userName"
                  type="text"
                  placeholder="Usuário"
                  onChange={e => setUserName(e.target.value)}
                />
              </InputField>
              <InputField className="input-field">
                <ContainerIcon>
                  <FaEnvelope />
                </ContainerIcon>
                <Input
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                  onChange={e => setUserEmail(e.target.value)}
                />
              </InputField>
              <InputField className="input-field">
                <ContainerIcon>
                  <FaLock />
                </ContainerIcon>
                <Input
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                />
              </InputField>
              <BtnSubmit type="submit" className="btn" value="SignUp" />
              <SocialText>
                ou Registre com plataforma de mídia social
              </SocialText>
              <SocialMedia className="social-media">
                <SocialIcon onClick={onFacebookSignUp} className="social-icon">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon onClick={onTwitterSignUp} className="social-icon">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon onClick={onGoogleSignUp} className="social-icon">
                  <FaGoogle />
                </SocialIcon>
              </SocialMedia>
            </FormSignup>
          </SigninUp>
        </FormContainer>
        <PanelsContainer className="panels-container">
          <PanelLeft className={`panel left-panel ${mode}`}>
            <PanelContentLeft className={`content ${mode}`}>
              <h3>Novo aqui?</h3>
              <p>Click para se registrar. Vamos Juntas.</p>
              <BtnTransparent
                type="button"
                className="btn transparent"
                value="registrar"
                onClick={handleClickRegister}
              />
            </PanelContentLeft>
            <ImageLeft className={`image ${mode}`} src="/images/wedding.svg" />
          </PanelLeft>
          <PanelRight className={`panel right-panel ${mode}`}>
            <PanelContentRight className={`content ${mode}`}>
              <h3>Um de nós?</h3>
              <p>O login terá um tempo de 30 minutos de inatividade.</p>
              <BtnTransparent
                type="button"
                className="btn transparent"
                value="Login"
                onClick={handleClickLogin}
              />
            </PanelContentRight>
            <ImageRight className={`image ${mode}`} src="/images/login.svg" />
          </PanelRight>
        </PanelsContainer>
      </Container>
    </>
  );
}
