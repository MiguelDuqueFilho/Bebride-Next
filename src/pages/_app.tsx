import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Menu from '../components/Menu';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { themeDefault, themeDark } from '../styles/theme';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeSelDark, setThemeSelDark] = useState(false);

  const handleSetTheme = (dark: boolean) => {
    setThemeSelDark(dark);
  };

  const handleTheme = () => {
    return themeSelDark ? themeDark : themeDefault;
  };

  return (
    <ThemeProvider theme={handleTheme}>
      <Head>
        <title>BeBride Assessoria</title>
      </Head>
      <Menu darkTheme={handleSetTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
