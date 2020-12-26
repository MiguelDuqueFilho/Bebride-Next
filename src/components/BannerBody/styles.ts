import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  background-color: ${props => props.theme.color.background};
  display: flex;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  flex-direction: row;
  @media (max-width: 959px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 570px) {
    flex-direction: column-reverse;
  }
`;

export const ContainerContent = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    font-family: 'romantisch';
    font-size: 5.6em;
    margin-bottom: -40px;
    color: ${props => props.theme.color.title};

    @media (max-width: 959px) {
      width: 100vw;
      font-size: 4rem;
      margin: -30px 0;
    }
    @media (max-width: 570px) {
      width: 100vw;
      font-size: 3rem;
      margin: -30px 0;
    }
  }
  > span {
    font-family: Times New Roman;
    font-size: 0.95em;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.13em;
    text-align: left;
    margin-bottom: 20px;

    color: ${props => props.theme.color.title};
    @media (max-width: 959px) {
      font-size: 0.78rem;
      justify-content: flex-end;
    }
    @media (max-width: 570px) {
      font-size: 0.5rem;
      justify-content: flex-end;
    }
  }
`;

export const ContainerLogo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;

  border-radius: 0 0 0 40vw;
  background: ${props => props.theme.color.gradientStart};

  @media (max-width: 959px) {
    width: 100vw;
    height: 100%;
  }
  @media (max-width: 570px) {
    width: 100vw;
    height: 100%;
  }
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
`;

export const LogoHome = styled.img`
  color: ${props => props.theme.color.title};
  width: 50vw;

  @media (max-width: 959px) {
    width: 50vw;
    height: 100%;
  }
  @media (max-width: 570px) {
    width: 40vw;
    width: 100vw;
  }
`;

export const LogoImage = styled.img`
  width: 20vw;
  margin-bottom: 30px;
  @media (max-width: 959px) {
    width: 30vw;
  }
  @media (max-width: 570px) {
    width: 40vw;
  }
`;
