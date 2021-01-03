import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.background};
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 15px;

  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.color.title};
  > h2 {
    font-family: 'Cormorant Garamond', serif;

    @media (max-width: 870px) {
      font-size: 1.5rem;
    }

    @media (max-width: 570px) {
      font-size: 1.2rem;
    }
    > span {
      font-size: 1.4rem;
      text-align: center;
      color: ${props => props.theme.color.title};
    }
    > p {
      margin: 2rem 15px;
      font-size: 2.5rem;
      line-height: 1.5em;
      font-family: 'romantisch', serif;
      color: ${props => props.theme.color.primary};

      > svg {
        color: ${props => props.theme.color.primary};
        margin-right: 2rem;
      }
    }
  }
`;

export const TeamSocial = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 30%;
  margin-top: 2rem;
  margin-bottom: 30px;
  margin-left: 15px;
  color: ${props => props.theme.color.text};
  text-align: center;
  @media (max-width: 870px) {
    width: 30%;
  }

  @media (max-width: 570px) {
    width: 60%;
  }
  > i {
    color: ${props => props.theme.color.text};
    font-size: 32px;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  font-size: 2.5rem;
  transition: 0.3s;

  color: ${props => props.theme.color.socialText};

  :hover {
    color: ${props => props.theme.color.socialTextHover};
  }
`;

export const LogoImage = styled.img`
  width: 30vw;
  margin-bottom: 30px;
  @media (max-width: 870px) {
    width: 40vw;
  }
  @media (max-width: 570px) {
    width: 60vw;
  }
`;
