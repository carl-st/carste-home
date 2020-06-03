import React from 'react';
import App from 'next/app';
import Router from 'next/router';
// @ts-ignore
import withGA from 'next-ga';
import GlobalStyles from '../styles/global';
import { Helmet } from 'react-helmet';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false;
class Carste extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&family=Raleway:wght@300&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default withGA('UA-159498003-1', Router)(Carste);
