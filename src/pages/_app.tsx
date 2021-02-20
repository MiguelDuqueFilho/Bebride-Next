import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { Provider } from 'next-auth/client';

/** material-ui */
import MyThemeProvider from '../components/Theme/MyThemeProvider';
import { SettingsProvider, defaultSettings } from '../contexts/SettingsContext';

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
            <Component {...pageProps} />
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>
    </>
  );
};

export default MyApp;
