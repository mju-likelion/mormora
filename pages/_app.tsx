import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>멋쟁이 사자처럼 at 명지대 자연</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
