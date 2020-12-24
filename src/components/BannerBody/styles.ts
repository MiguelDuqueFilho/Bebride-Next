import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.color.background};
  display: flex;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  flex-direction: row;
  @media (max-width: 959px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 570px) {
    flex-direction: column-reverse;
  }
`;

export const ContainerContent = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.color.title};

    @media (max-width: 959px) {
      width: 100vw;
      font-size: 1.7rem;
      margin: 20px 0;
    }
    @media (max-width: 570px) {
      width: 100vw;
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
  > span {
    margin-bottom: 20px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.color.title};
    @media (max-width: 959px) {
      font-size: 1.2rem;
      justify-content: flex-end;
    }
    @media (max-width: 570px) {
      font-size: 1rem;
      justify-content: flex-end;
    }
  }
`;

export const ContainerLogo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;

  border-radius: 0 0 0 40vw;
  background: ${props => props.theme.color.gradientStart};

  @media (max-width: 959px) {
    width: 100vw;
    height: 100%;
  }
  @media (max-width: 570px) {
    width: 100vw;
    height: 100%;
  }
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
`;

export const LogoHome = styled.img`
  width: 50vw;
  @media (max-width: 959px) {
    width: 50vw;
    height: 100%;
  }
  @media (max-width: 570px) {
    width: 40vw;
    width: 100vw;
  }
`;

export const LogoImage = styled.img`
  width: 20vw;
  @media (max-width: 959px) {
    width: 30vw;
  }
  @media (max-width: 570px) {
    width: 40vw;
  }
`;
export const ContainerWhatsApp = styled.div`
  width: 100vw;
`;

export const ButtonWhatsApp = styled.a`
  padding: 0.75rem 1.75rem;
  margin-top: 3rem;
  font-family: 'romantisch';
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.color.buttonText};
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;

  > svg {
    margin-top: 3px;
    margin-right: 1rem;
    vertical-align: top;
  }

  &:hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
`;
