import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>멋쟁이 사자처럼 at 명지대 자연</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
