import React from 'react';
// import { Provider } from 'next-auth/client';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';

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

      <Theme toggleTheme={toggleTheme} themeTitle={theme.title} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
