import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';

/**** styles from  @material-ui/core */

export const useStyles = makeStyles(theme => ({
  search: {
    marginTop: '100px',

    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
    backgroundColor: theme.palette.background.default
  },
  input: {
    flex: 1
  }
}));

export const MUiCheckbox = styled(Checkbox)`
  border-color: yellowgreen;
  align-self: center;
  color: yellow;
  width: 30px;
  height: 30px;
`;

/**** styles from  styled-components */

// export const Container = styled(Paper)`
//   ${({ theme }) => `
//   background-color: ${theme.palette.background.default};
//   `};

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;

  display: flex;
  justify-content: stretch;
  align-items: center;
  text-align: center;
  flex-direction: row;
  @media (max-width: 870px) {
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

  @media (max-width: 870px) {
    width: 100%;
    height: 50vh;
  }

  @media (max-width: 570px) {
    width: 100%;
    height: 50vh;
  }
  /*
  > p {
    font-family: 'romantisch';
    font-size: 6em;
    margin-bottom: -40px;
    color: ${props => props.theme.color.title};

    @media (max-width: 870px) {
      width: 100vw;
      font-size: 6rem;
      margin: -30px 0;
    }
    @media (max-width: 570px) {
      width: 100vw;
      font-size: 5rem;
    }
  } */
  > span {
    font-family: Times New Roman;
    font-size: 1em;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.13em;
    text-align: left;
    margin-bottom: 20px;
    color: ${props => props.theme.color.title};
    @media (max-width: 870px) {
      font-size: 1rem;
    }
    @media (max-width: 570px) {
      font-size: 0.8rem;
    }
  }
`;

export const P = styled.p`
  font-family: 'romantisch';
  font-size: 7rem;
  margin-bottom: -40px;
  color: ${props => props.theme.color.title};

  @media (max-width: 870px) {
    width: 100vw;
    font-size: 6rem;
    margin: -30px 0;
  }
  @media (max-width: 570px) {
    width: 100vw;
    font-size: 5rem;
  }
`;

export const ContainerLogo = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;

  border-radius: 0 0 0 40vw;
  background: ${props => props.theme.color.gradientStart};

  @media (max-width: 870px) {
    width: 100vw;
    height: 75%;
  }
  @media (max-width: 570px) {
    width: 100vw;
    height: 50vh;
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
  width: 40vw;
  padding-left: 3rem;
  @media (max-width: 870px) {
    width: 70vw;
    height: 100%;
  }
  @media (max-width: 570px) {
    width: 90vw;
    height: 100%;
  }
`;

export const LogoImage = styled.img`
  width: 30vw;
  margin-bottom: 30px;
  @media (max-width: 870px) {
    width: 40vw;
  }
  @media (max-width: 570px) {
    width: 40vw;
  }
`;
