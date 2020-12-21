import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.theme.color.background};
  font-family: 'Cormorant Garamond', serif;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  > h1 {
    color: ${props => props.theme.color.title};
  }
`;

export const Logo = styled.img`
  align-self: center;
  height: 14em;
`;

export const ContainerContent = styled.div``;

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  text-align: center;

  > h2 {
    text-align: start;
    font-size: 1.7em;
    @media (max-width: 959px) {
      text-align: center;
      font-size: 1.8em;
    }
    > p {
      margin: 2rem 6rem;
      font-size: 2.7rem;
      line-height: 1.5em;
      color: ${props => props.theme.color.primary};
      text-align: center;
      @media (max-width: 959px) {
        font-size: 2rem;
        line-height: 1.5em;
        padding-left: 0;
        margin: 2rem 4rem;
      }

      @media (max-width: 570px) {
        margin: 2rem 2rem;
      }
    }
  }
`;

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 6rem;

  @media (max-width: 959px) {
    margin: 4rem 3rem;
    flex-direction: column;
  }

  @media (max-width: 570px) {
    margin: 2rem 1rem;
  }
`;

export const ContainerTeamImag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 959px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ContainerTeamText = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-top: 2rem !important;
  @media (max-width: 959px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ImageTeam = styled.img`
  max-width: 60%;
  height: auto;
`;

export const TeamDescr = styled.p`
  color: ${props => props.theme.color.text};
  text-align: justify;
  font-size: 20px;
  margin: 2rem;
`;

export const TeamSocial = styled.div`
  display: flex;
  justify-content: auto;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
  color: ${props => props.theme.color.text};
  text-align: center;
  > i {
    color: ${props => props.theme.color.text};
    font-size: 32px;
  }
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
