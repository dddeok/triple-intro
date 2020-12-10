import React from 'react';
import App from 'next/app';

import { GlobalStyle } from '@common/styles/GlobalStyle';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* <ReactHelmet /> */}
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
