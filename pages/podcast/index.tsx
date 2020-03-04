import Layout from '../../components/Layout';
import Paragraph from '../../components/Paragraph';
import PlayersBar from '../../components/PlayersBar';
import { NextSeo } from 'next-seo';
import theme from '../../styles/theme';

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
          padding: 0 2rem 4rem;
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
            padding: 0 20% 4rem;
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
      <NextSeo
        title="Glosariusz Programisty - zrozum żargon IT"
        description="Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
        trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
        pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!"
        canonical="https://carste.pl/"
        openGraph={{
          url: 'https://carste.pl/podcast',
          title: 'Glosariusz Programisty - zrozum żargon IT',
          description: `Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
            trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
            pogubić. Każdy odcinek podkastu wyjaśnia kilka z nich, nawet jeżeli są uważane za podstawowe!`,
          images: [
            {
              url: 'https://carste.pl/img/podcast-banner.png',
              alt: 'Profile picture',
            },
          ],
          site_name: 'Podkast',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
          <PlayersBar />
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
          scrolling="no"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Admin;
