import React from 'react';
import App from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Helmet } from 'react-helmet';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import GlobalStyles from '../styles/global';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
class Carste extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="/fonts/Kielo-Regular.otf"
            as="font"
            type="font/opentype"
          />
          <link
            rel="preload"
            href="/fonts/Planck-Regular.otf"
            as="font"
            type="font/opentype"
          />
        </Helmet>
        <GlobalStyles />
        <Analytics />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(Carste, nextI18NextConfig);
