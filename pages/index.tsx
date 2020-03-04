import Head from 'next/head';
import Layout from '../components/Layout';
import ShareBar from '../components/ShareBar';
import Paragraph from '../components/Paragraph';
import theme from '../styles/theme';

const paragraphContent: JSX.Element = (
  <>
    <p>
      Programista Web i iOS. Obecnie ponad 4 lata profesjonalnego doświadczenia.
      Praca zarówno z klientami zagranicznymi jak i lokalnymi.
    </p>
    <p>W wolnym czasie fan Playstation i Nintendo Switcha.</p>
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
    <Head>
      <title>Karol Stępień - Senior Fullstack Engineer</title>
      <meta
        name="description"
        content="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
      />
      <meta
        name="og:title"
        property="og:title"
        content="Karol Stępień - Senior Fullstack Engineer"
      />
      <meta
        name="og:description"
        property="og:description"
        content="Programista Web i iOS. JavaScript, React, Redux, Node.js, Front-End, Back-End."
      />
      <meta name="og:locale" property="og:locale" content="pl" />
      <meta
        name="og:image"
        property="og:image"
        content="/img/profilepic.jpg"
      />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Head>
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
