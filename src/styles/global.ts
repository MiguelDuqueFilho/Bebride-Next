import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'romantisch';
    src: url('/romantisch.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
    overflow: hidden;

  }
`;
