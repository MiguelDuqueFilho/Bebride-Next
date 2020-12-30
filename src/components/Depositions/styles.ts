import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.background};
`;

export const ContainerContent = styled.div`
  padding: 0 3rem;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 6rem;

  > h2 {
    font-size: 2.7rem;
    line-height: 1.5em;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
`;

export const ContainerItem = styled.div`
  width: 30%;
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 870px) {
    width: 45%;
  }

  @media (max-width: 570px) {
    width: 90%;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: ${props => props.theme.color.boxShadow};
`;

export const StyledImage = styled(Image)`
  border-radius: 12px;
  max-width: 100%;
`;

export const CardBody = styled.div`
  padding: 1rem 1rem;
  > h4 {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.color.title};
    text-align: center;
    padding-top: 1rem;
  }

  > h5 {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.color.title};
    text-align: left;
    padding-top: 1rem;
  }

  > p {
    font-size: 1rem;

    color: ${props => props.theme.color.text};
    text-align: justify;
    padding-top: 1rem;
  }
`;
