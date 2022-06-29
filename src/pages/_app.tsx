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
        <title>International esports tournaments at EGO. Compete from anywhere.</title>
        <meta
          name='description'
          content='Instantly compete in free tournaments at EGO Lounge around the world, without the pain of LFG or Matchmaking. Compete against others, for yourself.'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
