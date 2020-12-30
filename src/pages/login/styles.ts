import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;

    background: ${props => props.theme.color.gradientStart};

    background: linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    background: -moz-linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    background: -webkit-linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    filter: {
      progid: DXImageTransform
        (
          startColorstr= '${props => props.theme.color.gradientStart}',
          endColorstr= '${props => props.theme.color.gradientEnd}',
          GradientType=1
        );
    }

    top: -10%;
    right: 48%;
    transform: translatey(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }

  /* ANIMATION */

  &.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  @media (max-width: 870px) {
    min-height: 600px;
    height: 100vh;

    &:before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: 68%;
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    &.sign-up-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }
  }

  @media (max-width: 570px) {
    &:before {
      bottom: 72%;
      left: 50%;
    }
    &.sign-up-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }
`;

export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const SigninUp = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;

  &.sign-up-mode {
    left: 25%;
  }

  @media (max-width: 870px) {
    width: 100%;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;

    &.sign-up-mode {
      top: 5%;
      transform: translate(-50%, 0);
      left: 50%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media (max-width: 570px) {
    padding: 0 1.5rem;
  }
`;

export const FormSignin = styled(Form)`
  /* opacity: 1; */
  z-index: 2;
  &.sign-up-mode {
    opacity: 0;
    z-index: 1;
  }
`;

export const FormSignup = styled(Form)`
  opacity: 0;
  z-index: 1;
  &.sign-up-mode {
    opacity: 1;
    z-index: 2;
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: ${props => props.theme.color.title};
  margin-bottom: 10px;
`;

export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: ${props => props.theme.color.inputBackgroud};
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
`;

export const ContainerIcon = styled.i`
  text-align: center;
  line-height: 55px;
  color: ${props => props.theme.color.inputIcon};
  font-size: 1.1rem;
  transition: 0.5s;
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.theme.color.input};

  ::placeholder {
    color: ${props => props.theme.color.inputPlaceHolder};
    font-weight: 500;
  }
`;

export const Button = styled.input`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
  :hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
`;

export const BtnSubmit = styled(Button)``;

export const BtnTransparent = styled(Button)`
  margin: 0;
  background: none;
  border: 2px solid ${props => props.theme.color.white};
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;

  @media (max-width: 870px) {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }
`;

export const SocialText = styled.p`
  color: ${props => props.theme.color.title};
  padding: 0.7rem 0;
  font-size: 1rem;
`;

export const SocialMedia = styled.p`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;

  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3s;

  color: ${props => props.theme.color.socialText};
  border: 2px solid ${props => props.theme.color.socialText};
  border-color: ${props => props.theme.color.socialText};

  :hover {
    color: ${props => props.theme.color.socialTextHover};
    border: 2px solid ${props => props.theme.color.socialTextHover};
    border-color: ${props => props.theme.color.socialTextHover};
  }
`;

export const PanelsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;

export const Panel = styled.div`
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;

  pointer-events: all;
  padding: 3rem 17% 2rem 12%;

  @media (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
  }
`;

export const PanelLeft = styled(Panel)`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
  &.sign-up-mode {
    pointer-events: none;
  }

  @media (max-width: 870px) {
    grid-row: 1 / 2;
  }
`;

export const PanelRight = styled(Panel)`
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
  &.sign-up-mode {
    pointer-events: all;
  }

  @media (max-width: 870px) {
    grid-row: 3 / 4;
  }
`;

export const PanelContent = styled.div`
  color: ${props => props.theme.color.white};
  background: transparent;
  transition: 0.9s 0.6s ease-in-out;
  transition-delay: 0.6s;

  @media (max-width: 870px) {
    padding-right: 15px;
    transition: 0.9s 0.8s ease-in-out;
  }

  @media (max-width: 570px) {
    padding: 0.5rem 1rem;
  }

  > h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;

    @media (max-width: 870px) {
      font-size: 1.2rem;
    }
  }
  > p {
    font-size: 0.95rem;
    padding: 0.7rem 0;

    @media (max-width: 870px) {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
  }
`;

export const PanelContentRight = styled(PanelContent)`
  transform: translateX(800px);
  &.sign-up-mode {
    transform: translateX(0px);
  }

  @media (max-width: 870px) {
    transform: translateY(300px);
  }
`;

export const PanelContentLeft = styled(PanelContent)`
  &.sign-up-mode {
    transform: translateX(-800px);
  }

  @media (max-width: 870px) {
    &.sign-up-mode {
      transform: translateY(-300px);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;

  @media (max-width: 870px) {
    width: 200px;
    transition: 0.9s 0.6s ease-in-out;
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const ImageRight = styled(Image)`
  transform: translateX(800px);
  &.sign-up-mode {
    transform: translateX(0px);
  }

  @media (max-width: 870px) {
    &.sign-up-mode {
      transform: translateY(0px);
    }
  }
`;

export const ImageLeft = styled(Image)`
  &.sign-up-mode {
    transform: translateX(-800px);
  }

  @media (max-width: 870px) {
    &.sign-up-mode {
      transform: translateY(-300px);
    }
  }
`;
