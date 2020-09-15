import { ReactElement } from 'react';
import Layout from '../../components/Layout/Layout';
import Paragraph from '../../components/Paragraph/Paragraph';
import Banner from '../../pagesComponents/home/banner';
import { PaddedSection } from '../../styles/styles.common';
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
    <Layout
      description="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
      title="Karol Stępień - Senior Full Stack Engineer"
      metaImages={[
        {
          url: 'https://carste.pl/img/profilepic.jpg',
          width: 500,
          height: 500,
          alt: 'Profile picture',
        },
      ]}
    >
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
