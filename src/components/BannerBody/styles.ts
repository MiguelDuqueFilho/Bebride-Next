import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  background-color: ${props => props.theme.color.background};
  display: flex;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  flex-direction: row;
`;

export const ContainerContent = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'romantisch';
    font-size: 6rem;
    font-weight: 900;
    color: ${props => props.theme.color.primary};
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    color: ${props => props.theme.color.title};
    margin: 30px;
  }
`;

export const ContainerLogo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;

  border-radius: 0 0 0 40vw;
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

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="${props =>
    props.theme.color.gradientStart}", endColorstr="${props =>
    props.theme.color.gradientEnd}", GradientType=1 );
  /* height: 60%; */
`;

export const LogoHome = styled.img`
  width: 50vw;
`;

export const Btn = styled.a`
  padding: 0.75rem 1.75rem;
  margin-top: 3rem;
  font-family: 'romantisch';
  /* font-family: 'Dancing Script', cursive; */
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.color.buttonText};
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;

  &:hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
`;
