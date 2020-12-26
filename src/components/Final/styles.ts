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
  margin: 2.5rem 15px;

  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.color.title};
  > h2 {
    font-family: 'Cormorant Garamond', serif;

    @media (max-width: 959px) {
      font-size: 1.5rem;
    }

    @media (max-width: 570px) {
      font-size: 1.2rem;
    }
    > span {
    }
    > p {
      margin: 2rem 15px;
      font-size: 2rem;
      line-height: 1.5em;
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
  width: 40%;
  margin-top: 2rem;
  margin-bottom: 30px;
  margin-left: 15px;
  color: ${props => props.theme.color.text};
  text-align: center;
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
  width: 60vw;
  margin-bottom: 30px;
  @media (max-width: 959px) {
    width: 70vw;
  }
  @media (max-width: 570px) {
    width: 70vw;
  }
`;
