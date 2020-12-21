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
    > p {
      margin-top: 2rem;
      font-size: 2.7rem;
      line-height: 1.5em;
      color: ${props => props.theme.color.primary};
      text-align: center;
    }
  }
`;

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 6rem;
`;

export const ContainerTeamImag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 50%;
  max-width: 50%;
`;

export const ContainerTeamText = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-top: 2rem !important;
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
  > a {
    text-align: center;
    > i {
      font-size: 32px;
    }
  }
`;
