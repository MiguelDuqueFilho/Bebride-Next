import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

  @font-face {
    font-family: 'romantisch';
    font-style: normal;
    font-weight: normal;
    src: url('/romantisch-Regular.ttf') format('truetype');
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
