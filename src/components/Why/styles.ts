import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.color.background};
  font-family: 'Cormorant Garamond', serif;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const ContainerContent = styled.div`
  margin: 0 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  @media (max-width: 870px) {
    flex-direction: column;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const ContainerWhyTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: auto;
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
      }
    }
  }
  > span {
    margin: 1rem 2rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${props => props.theme.color.title};
  }
`;

export const ContainerWhyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  width: 85vw;
  margin-top: 2rem;
  @media (max-width: 870px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const ContainerWhyDescr = styled.p`
  color: ${props => props.theme.color.text};
  text-align: justify;
  font-size: 1.5em;
  margin: 1rem;

  @media (max-width: 870px) {
    font-size: 1.2em;
  }

  @media (max-width: 570px) {
    font-size: 1em;
    > svg {
      color: ${props => props.theme.color.primary};
      margin-right: 2rem;
      font-size: 1em;
    }
  }

  > svg {
    color: ${props => props.theme.color.primary};
    margin-right: 2rem;
  }
`;

export const ContainerTeam2Imag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 50%;
  max-width: 100%;
  margin-top: 40px;
  @media (max-width: 870px) {
    flex: 0 0 50%;
    max-width: 80%;
    align-self: center;
    margin-top: 40px;
  }
  @media (max-width: 570px) {
    flex: 0 0 50%;
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const ImageTeam2 = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
`;
