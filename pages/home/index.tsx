import { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import Paragraph from '../../components/Paragraph/Paragraph';
import Banner from '../../pagesComponents/home/banner';
import { NextSeo } from 'next-seo';
import {
  PaddedSection,
} from '../../styles/styles.common';  
import Head from 'next/head';
import { NextPage } from 'next';

const paragraphContent: ReactElement = (
  <>
    <p>
      Programista Web i iOS. Obecnie ponad 4 lata profesjonalnego doświadczenia.
      Głównie wykorzystywane przeze mnie technologie webowe to obecnie React,
      Next.js, Node.js, Nest.js, GraphQL, TypeScript. Pracuję zarówno z
      klientami zagranicznymi jak i lokalnymi.
    </p>
    <p>W wolnym czasie fan gier na Playstation i Nintendo Switch'a.</p>
    <p>Czy wiesz już o moim podkaście?</p>
  </>
);

const Home: NextPage = () => (
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
    <Layout>
      <NextSeo
        title="Karol Stępień - Senior Full Stack Engineer"
        description="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
        canonical="https://carste.pl/"
        openGraph={{
          url: 'https://carste.pl/',
          title: 'Karol Stępień - Senior Full Stack Engineer',
          description:
            'Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End.',
          images: [
            {
              url: 'https://carste.pl/img/profilepic.jpg',
              width: 500,
              height: 500,
              alt: 'Profile picture',
            },
          ],
          site_name: 'O mnie',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Banner />
      <PaddedSection>
        <Paragraph
          title="O mnie"
          lead="Czym się zajmuję?"
          content={paragraphContent}
        />
      </PaddedSection>
    </Layout>
  </>
);

export default Home;