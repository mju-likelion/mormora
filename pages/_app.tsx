import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import GlobalStyles from 'components/GlobalStyles';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import theme from 'theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>멋쟁이 사자처럼 at 명지대 자연</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
