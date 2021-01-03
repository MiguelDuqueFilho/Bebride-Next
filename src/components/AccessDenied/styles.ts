import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
  overflow: hidden;

  @media (max-width: 870px) {
  }

  @media (max-width: 570px) {
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
