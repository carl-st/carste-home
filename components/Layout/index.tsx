import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { OpenGraphMedia } from 'next-seo/lib/types';
import Header from '../Header';
import Footer from '../Footer';
import AdminHeader from '../AdminHeader';

type Props = {
  children: ReactNode;
  isAdmin?: boolean;
  title: string;
  description: string;
  metaImages: ReadonlyArray<OpenGraphMedia>;
};

const Layout: NextPage<Props> = ({
  isAdmin,
  children,
  title,
  description,
  metaImages,
}) => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#201f2d" />
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <meta name="msapplication-TileColor" content="#201f2d" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#201f2d"></meta>
    </Head>
    <NextSeo
      title={title}
      description={description}
      canonical="https://carste.pl/"
      openGraph={{
        url: 'https://carste.pl/',
        title,
        description,
        images: metaImages,
        site_name: 'Carste',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    {isAdmin ? <AdminHeader /> : <Header />}
    {children}
    <Footer />
  </>
);

export default Layout;
