import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { Provider } from 'next-auth/client';

/** Styled-components */
import GlobalStyle from '../styles/global';

/** material-ui */
import MyThemeProvider from '../components/Theme/MyThemeProvider';
import { SettingsProvider, defaultSettings } from '../contexts/SettingsContext';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>BeBride Assessoria</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider session={pageProps.session}>
        <SettingsProvider settings={defaultSettings}>
          <MyThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
            <GlobalStyle />
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>
    </>
  );
};

export default MyApp;
