import React, { useEffect } from 'react';
import {} from 'next';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Menu from '../components/Menu';
import Theme from '../components/Theme';
import { themeLight, themeDark } from '../styles/theme';
import usePersistedState from '../utils/usePersistedState';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState('theme', themeLight);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? themeDark : themeLight);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>BeBride Assessoria</title>
      </Head>
      <Menu />
      <Theme toggleTheme={toggleTheme} themeTitle={theme.title} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
