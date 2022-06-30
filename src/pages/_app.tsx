import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "~/styles";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NZ7RLL3"
};

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>app title goes here</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      {/* header goes here */}
      <Component {...pageProps} />
      {/* footer goes here */}
    </ThemeProvider>
  );
}

export default MyApp;
