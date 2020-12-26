import styled from 'styled-components';

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media (max-width: 959px) {
    width: 40%;
  }

  @media (max-width: 570px) {
    width: 70%;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;

  > svg {
    font-size: 3rem;
    color: ${props => props.theme.color.primary};
  }

  > h4 {
    color: ${props => props.theme.color.title};
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  > p {
    color: ${props => props.theme.color.text};
    font-size: 1rem;
    padding-top: 1rem;
    min-height: 8rem;
    text-align: justify;
  }
`;
