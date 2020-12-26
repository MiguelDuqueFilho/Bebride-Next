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
  padding-top: 3rem;
  > h2 {
    color: ${props => props.theme.color.title};
  }
`;

export const ContainerContent = styled.div`
  margin: 0 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  @media (max-width: 959px) {
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
    font-size: 2.7rem;
    line-height: 1.5em;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }
  > span {
    margin: 2rem 2rem;
    color: ${props => props.theme.color.title};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.3em;
    text-align: justify;

    @media (max-width: 959px) {
      font-size: 1.1em;
    }

    @media (max-width: 570px) {
      font-size: 1em;
    }
  }
`;

export const ContainerWhyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  width: 85vw;
  margin-top: 2rem;
  @media (max-width: 959px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  > p {
    color: ${props => props.theme.color.text};
    text-align: justify;
    font-size: 24px;
    margin: 1rem;

    @media (max-width: 959px) {
      font-size: 20px;
    }

    @media (max-width: 570px) {
      font-size: 18px;
    }

    > svg {
      color: ${props => props.theme.color.primary};
      margin-right: 2rem;
      width: rem;
      font-size: 1.8rem;
    }
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
  @media (max-width: 959px) {
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
  /* box-shadow: ${props => props.theme.color.boxShadow}; */
`;
