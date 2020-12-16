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
    /* font-family: 'Dancing Script', cursive; */
    font-size: 54px;
    color: ${props => props.theme.color.primary};
    margin-top: 30px;
  }

  p {
    font-family: 'Dancing Script', cursive;
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 32px;
    color: ${props => props.theme.color.title};
    margin-top: 14px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.background};
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
  justify-content: space-between;
  align-items: center;
  height: 60%;
`;

export const LogoHome = styled.img`
  width: 45%;
  height: 80%;
  padding: 30px;
  /* border: 1px solid ${props => props.theme.color.gray}; */
`;

export const Btn = styled.a`
  padding: 0.75rem 1.75rem;
  margin-top: 0.8rem;
  font-family: 'romantisch';
  /* font-family: 'Dancing Script', cursive; */
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.color.white};
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
`;
