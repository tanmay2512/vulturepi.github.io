import React from "react";
import Head from "next/head";
import Script from "next/script";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./global.css";

const chakraTheme = extendTheme();
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>vulture-pi-web</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
