import Head from 'next/head';
import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import theme from '../../styles/theme';
import PlayersBar from '../../components/PlayersBar';

const paragraphContent: JSX.Element = (
  <>
    <p>
      Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
      trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
      pogubić. Każdy odcinek wyjaśnia kilka z nich, nawet jeżeli są uważane za
      podstawowe. Posłuchaj niezależnie od tego czy Twoja przygoda z
      programowaniem się zaczyna, masz już trochę doświadczenia, czy może po
      prostu chcesz zrozumieć o co chodzi tym wszystkim nerdom!
    </p>
    <p>Juź dostępny!</p>
  </>
);

const Admin = () => {
  return (
    <Layout>
      <style jsx>{`
        section:not(.banner) {
          padding: 4rem 2rem;
        }

        .banner {
          background-color: black;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }

        .cover-container {
          flex: 2;
        }

        .name-container {
          display: none;
          flex: 1;
          min-width: 40%;
        }

        .logo-container {
          min-width: 90px;
          width: 90px;
          margin-right: 30px;
        }

        .logo {
          width: 100%;
        }

        .cover-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .cover-image-wide {
          display: none;
        }

        .players {
          display: flex;
          justify-content: center;
        }

        .mobile-players-container {
          display: flex;
          justify-content: center;
        }

        @media (min-width: ${theme.breakpoints.tablet}) {
          section:not(.banner) {
            padding: 4rem 20%;
          }

          .banner {
            flex-direction: row;
          }

          .logo-container {
            margin-right: 60px;
            min-width: 150px;
          }

          .name-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            flex: 1;
            padding: 4rem;
            color: white;
          }

          .cover-image {
            display: none;
          }

          .cover-image-wide {
            display: block;
            height: 100%;
            width: 100%;
          }

          .mobile-players-container {
            display: none;
          }
        }
      `}</style>
      <Head>
        <title>Glosariusz Programisty - zrozum żargon IT</title>
        <meta
          name="description"
          content="Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
            trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
            pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Glosariusz Programisty - zrozum żargon IT"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
            trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
            pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!"
        />
        <meta name="og:locale" property="og:locale" content="pl" />
        <meta
          name="og:image"
          property="og:image"
          content="./assets/img/logo.svg"
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="banner">
        <div className="cover-container">
          <img
            className="cover-image-wide"
            src="/img/keywords-wide.png"
            alt="podcast-cover"
          />
          <img
            className="cover-image"
            src="/img/podcast-cover.png"
            alt="podcast-cover"
          />
        </div>
        <div className="name-container">
          <object
            className="logo"
            data="/img/podcast-logo.svg"
            type="image/svg+xml"
          />
          <div className="players">
            <PlayersBar />
          </div>
        </div>
      </section>
      <section className="description">
        <Paragraph
          title="Glosariusz Programisty"
          lead="Zrozum żargon IT"
          content={paragraphContent}
        />
        <div className="mobile-players-container">
          <PlayersBar />
        </div>
      </section>
      <section>
        <iframe
          src="https://anchor.fm/glosariusz-programisty/embed/episodes/Endy-na-Start---o-mnie-sowami-deva-eb7p3n"
          height="102px"
          width="400px"
          scrolling="no"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Admin;
