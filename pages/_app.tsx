import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'components/GlobalStyles';
import theme from 'theme';

import Footer from '../components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>멋쟁이 사자처럼 at 명지대 자연</title>
      </Head>
      <GlobalStyles />
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
=======
      <Component {...pageProps} />
      <Footer />
>>>>>>> feature/create_footer
    </>
  );
}

export default MyApp;
