import { FormEvent, useState } from 'react';
import { getSession, signIn } from 'next-auth/client';

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

const SignInOut: React.FC = ({ content, session }) => {
  const [mode, setMode] = useState('');
  const [username, setUsername] = useState('');
  const [account, setAccount] = useState('');
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
    signIn('credentials', { account, password, isNewUser: false });
  }

  function onSubmitSignUp(e: FormEvent) {
    e.preventDefault();
    console.log('onSubmit');
    console.log(e);
    signIn('credentials', { username, account, password, isNewUser: true });
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
              <Input type="hidden" name="isNewUser" value={0} />
              <InputField className="input-field">
                <ContainerIcon>
                  <FaUser />
                </ContainerIcon>
                <Input
                  name="account"
                  type="email"
                  placeholder="Usuário"
                  onChange={e => setAccount(e.target.value)}
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
                <SocialIcon href="#" className="social-icon">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href="#" className="social-icon">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="#" className="social-icon">
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
                  name="username"
                  type="text"
                  placeholder="Usuário"
                  onChange={e => setUsername(e.target.value)}
                />
              </InputField>
              <InputField className="input-field">
                <ContainerIcon>
                  <FaEnvelope />
                </ContainerIcon>
                <Input
                  name="account"
                  type="text"
                  placeholder="Email"
                  onChange={e => setAccount(e.target.value)}
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
                <SocialIcon href="#" className="social-icon">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href="#" className="social-icon">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="#" className="social-icon">
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
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let content = null;

  if (session) {
    const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const options = { headers: { cookie: context.req.headers.cookie } };
    const res = await fetch(`${hostname}/api/examples/protected`, options);
    const json = await res.json();
    if (json.content) {
      content = json.content;
    }
  }

  return {
    props: {
      session,
      content
    }
  };
}

export default SignInOut;
