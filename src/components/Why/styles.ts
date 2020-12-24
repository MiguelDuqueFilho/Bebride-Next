import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.theme.color.background};
  font-family: 'Cormorant Garamond', serif;
  padding-top: 3rem;
  > h2 {
    color: ${props => props.theme.color.title};
  }
`;

export const ContainerContent = styled.div`
  margin: 0 6rem;
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
    margin-top: 2rem;
    color: ${props => props.theme.color.title};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.7em;
    font-size: 1.5rem;
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
