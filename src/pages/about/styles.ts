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

  &:before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;

    background: ${props => props.theme.color.gradientStart};

    background: linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    background: -moz-linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    background: -webkit-linear-gradient(
      -45deg,
      '${props => props.theme.color.gradientStart}' 0%,
      '${props => props.theme.color.gradientEnd}' 100%
    );

    top: 90%;
    left: 50%;
    transform: translatey(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  height: 80vh;
  z-index: 20;
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  height: 80vh;
  z-index: 20;
`;
