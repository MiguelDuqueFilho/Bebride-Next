import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: ${props => props.theme.color.section}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  font-family: 'Cormorant Garamond', serif;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  > h1 {
    color: ${props => props.theme.color.title};
  }
`;

export const ContainerContent = styled.div`
  margin-top: 2rem;
`;

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
    @media (max-width: 870px) {
      text-align: center;
      font-size: 1.8em;
    }
    > p {
      margin: 2rem 6rem;
      font-size: 1.6em;
      line-height: 1.5em;
      color: ${props => props.theme.color.primary};
      text-align: center;
      @media (max-width: 870px) {
        font-size: 1.6em;
        line-height: 1.5em;
        padding-left: 0;
        margin: 2rem 4rem;
      }

      @media (max-width: 570px) {
        margin: 2rem 2rem;
        font-size: 1em;
      }
    }
  }
`;

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 1rem 6rem;

  @media (max-width: 870px) {
    margin: 1rem 3rem;
    flex-direction: column;
  }

  @media (max-width: 570px) {
    margin: 1rem 1rem;
    flex-direction: column;
  }
`;

export const ContainerTeamImag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 50%;
  max-width: 100%;
  @media (max-width: 870px) {
    flex: 0 0 50%;
    max-width: 80%;
    align-self: center;
  }
  @media (max-width: 570px) {
    flex: 0 0 50%;
    max-width: 100%;
  }
`;

export const ContainerTeamText = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  margin-top: 2rem;
  @media (max-width: 870px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ImageTeam = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;

export const TeamDescr = styled.p`
  color: ${props => props.theme.color.text};
  text-align: justify;
  font-size: 1.5em;
  margin: 1rem;

  @media (max-width: 870px) {
    font-size: 1.2em;
  }

  @media (max-width: 570px) {
    font-size: 1em;
  }
`;
