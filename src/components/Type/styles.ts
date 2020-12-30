import styled from 'styled-components';

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media (max-width: 870px) {
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

  > h2 {
    color: ${props => props.theme.color.white};
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  > p {
    color: ${props => props.theme.color.light};
    font-size: 1rem;
    padding-top: 1rem;
    min-height: 8rem;
    text-align: justify;
    @media (max-width: 870px) {
      font-size: 20px;
    }

    @media (max-width: 570px) {
      font-size: 19px;
    }
  }
`;
