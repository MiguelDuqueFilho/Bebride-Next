import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

/** material-ui */
import MyThemeProvider from '../components/Theme/MyThemeProvider';
import { SettingsProvider, defaultSettings } from '../contexts/SettingsContext';
import { AlarmProvider } from '../contexts/AlarmContext';
import { defaultAlarm } from '../utils/constants';
import AlertMsg from '../components/AlertMsg';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Be Bride Assessoria</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider session={pageProps.session}>
        <SettingsProvider settings={defaultSettings}>
          <MyThemeProvider>
            <AlarmProvider alarm={defaultAlarm}>
              <Component {...pageProps} />
              <AlertMsg />
            </AlarmProvider>
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>
    </>
  );
};

export default MyApp;
