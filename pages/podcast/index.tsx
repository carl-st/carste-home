import Layout from '../../components/Layout';
import theme from '../../styles/theme';
import Logo from '../../public/img/podcast-logo.svg';

const Admin = () => {
  return (
    <Layout>
      <style jsx>{`
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
        }

        .logo-container {
          min-width: 90px;
          width: 90px;
          margin-right: 30px;
        }

        .logo {
          height: 100%;
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

        .description {
          min-height: 500px;
        }

        .description-container {
          padding: 4rem 20%;
          width: 100%;
          color: white;
        }

        @media (min-width: ${theme.breakpoints.tablet}) {
          .banner {
            flex-direction: row;
          }

          .logo-container {
            margin-right: 60px;
            min-width: 150px;
          }

          .name-container {
            display: block;
            background-color: transparent;
            flex: 1;
            padding: 40px;
          }

          .cover-image {
            display: none;
          }

          .cover-image-wide {
            display: block;
            height: 100%;
            width: 100%;
          }
        }
      `}</style>
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
          {/* <Logo /> */}
        </div>
      </section>
      <section className="description">
        <div className="description-container">
          <h1>Glosariusz Programisty</h1>
          <h2>Zrozum żargon koderów</h2>
          <p>
            Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
            trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
            pogubić. Każdy odcinek wyjaśnia kilka z nich. Posłuchaj niezależnie
            od tego czy Twoja przygoda z programowaniem się zaczyna, masz już
            trochę doświadczenia, czy może po prostu chcesz zrozumieć o co
            chodzi tym wszystkim nerdom!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
