import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'romantisch';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/romantisch-Regular.ttf') format('truetype');
  }
/*
@font-face {
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 400;
  src:
       url('/fonts/CormorantGaramond-Bold.ttf') format('truetype'),
       url('/fonts/CormorantGaramond-Light.ttf') format('truetype'),
       url('/fonts/CormorantGaramond-Medium.ttf') format('truetype'),
       url('/fonts/CormorantGaramond-Regular.ttf') format('truetype'),
       url('/fonts/CormorantGaramond-Bold.ttf') format('truetype'),


} */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input {
    font-family: 'Cormorant Garamond', serif;

  }
`;
