import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h1 {
    font-family: 'romantisch';
    font-size: 54px;
    color: ${props => props.theme.color.primary};
    margin-top: 40px;
  }

  p {
    font-family: 'Dancing Script', cursive;
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 32px;
    color: ${props => props.theme.color.white};
    margin-top: 24px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); // alterar
  }
`;

export const ContainerContent = styled.div`
  max-width: 700px;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60%;
`;

export const LogoHome = styled.img`
  width: 30%;
`;

export const Btn = styled.a`
  padding: 0.75rem 1.75rem;
  margin-top: 0.8rem;
  font-size: 1.1.rem;
  font-weight: 550;
  color: #fff44f;
  background-color: #111;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  text-transform: uppercase;

  &:hover {
    opacity: 0.7;
  }
`;
