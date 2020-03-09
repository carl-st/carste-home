import Layout from '../components/Layout';
import ShareBar from '../components/ShareBar';
import Paragraph from '../components/Paragraph';
import { NextSeo } from 'next-seo';
import theme from '../styles/theme';

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
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 0 2rem 4rem;
        align-items: center;
      }

      section.banner {
        color: ${theme.colors.mainBrand};
        justify-content: center;
        background-image: url('/img/background.jpg');
        background-position: center;
        background-size: cover;
        min-height: calc(100vh - ${theme.sizes.mobileHeaderHeight});
        align-items: center;
      }

      .text-container {
        margin-top: 2rem;
        text-align: center;
      }

      .text-container h1 {
        margin: 0;
      }

      .profile-image {
        max-width: 200px;
        max-height: 200px;
        border-radius: 50%;
        margin: 1rem;
        border: 8px solid ${theme.colors.mainBrand};
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        section {
          flex-direction: row;
          padding: 0 20% 4rem;
        }

        section.banner {
          min-height: calc(100vh - ${theme.sizes.desktopHeaderHeight});
        }

        .image-container {
          flex: 1;
        }

        .text-container {
          flex: 1;
          text-align: left;
        }

        .image-container {
          display: flex;
          justify-content: flex-end;
        }

        .profile-image {
          margin: 1rem 4rem;
          max-width: 300px;
        }
      }

      @media (min-width: ${theme.breakpoints.desktop}) {
        .profile-image {
          max-width: 400px;
          max-height: 400px;
        }
      }
    `}</style>
    <NextSeo
      title="Karol Stępień - Senior Fullstack Engineer"
      description="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
      canonical="https://carste.pl/"
      openGraph={{
        url: 'https://carste.pl/',
        title: 'Karol Stępień - Senior Fullstack Engineer',
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
    <section className="banner">
      <div className="image-container">
        <div>
          <img className="profile-image" src="/img/profilepic.jpg" />
        </div>
      </div>
      <div className="text-container">
        <h1>Karol Stępień</h1>
        <h2>Senior Fullstack Engineer</h2>
        <ShareBar />
      </div>
    </section>
    <section>
      <Paragraph
        title="O mnie"
        lead="Czym się zajmuję?"
        content={paragraphContent}
      />
    </section>
  </Layout>
);

export default Index;
