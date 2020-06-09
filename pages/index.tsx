import Layout from '../components/Layout/Layout';
import ShareBar from '../components/IconBar/ShareBar';
import Paragraph from '../components/Paragraph/Paragraph';
import { NextSeo } from 'next-seo';
import { Banner, ImageContainer, ProfileImage, TextContainer, PaddedSection } from '../styles/styles';

const paragraphContent: JSX.Element = (
  <>
    <p>
      Programista Web i iOS. Obecnie ponad 4 lata profesjonalnego doświadczenia.
      Głównie wykorzystywane przeze mnie technologie webowe to obecnie React, Next.js, Node.js, Nest.js, GraphQL, TypeScript.
      Pracuję zarówno z klientami zagranicznymi jak i lokalnymi.
    </p>
    <p>W wolnym czasie fan gier na Playstation i Nintendo Switch'a.</p>
    <p>Czy wiesz już o moim podkaście?</p>
  </>
);

const Index = () => (
  <Layout>
    <NextSeo
      title="Karol Stępień - Senior Full Stack Engineer"
      description="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
      canonical="https://carste.pl/"
      openGraph={{
        url: 'https://carste.pl/',
        title: 'Karol Stępień - Senior Full Stack Engineer',
        description: 'Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End.',
        images: [
          {
            url: 'https://carste.pl/img/profilepic.jpg',
            width: 500,
            height: 500,
            alt: 'Profile picture',
          }
        ],
        site_name: 'O mnie',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <Banner>
      <ImageContainer>
        <div>
          <ProfileImage className="profile-image" src="/img/profilepic.jpg" />
        </div>
      </ImageContainer>
      <TextContainer>
        <h1>Karol Stępień</h1>
        <h2>Senior Full Stack Engineer</h2>
        <ShareBar />
      </TextContainer>
    </Banner>
    <PaddedSection>
      <Paragraph
        title="O mnie"
        lead="Czym się zajmuję?"
        content={paragraphContent}
      />
    </PaddedSection>
  </Layout>
);

export default Index;
