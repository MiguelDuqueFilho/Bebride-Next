import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'romantisch';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/romantisch-Regular.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input {
    font-family: 'Cormorant Garamond', serif;

  }
`;
