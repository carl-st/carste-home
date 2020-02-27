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
          background-color: ${theme.colors.mainBrand};
          flex: 1;
          padding: 40px;
        }

        .logo-container {
          min-width: 90px;
          width: 90px;
          margin-right: 30px;
        }

        .cover-image {
          height: 300px;
        }

        .description {
          min-height: 500px;
        }

        .description-container {
          padding: 40px;
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
            background-color: transparent;
            flex: 1;
            padding: 40px;
          }

          .cover-image {
            height: auto;
            width: 100%;
          }

          .description {
            background-color: ${theme.colors.mainBrand};
          }

          .description-container {
            max-width: 400px;
          }
        }
      `}</style>
      <section className="banner">
        <div className="cover-container">
          <img
            className="cover-image"
            src="/img/keywords-wide.png"
            alt="podcast-cover"
          />
        </div>
        <div className="name-container">
          <Logo />
        </div>
      </section>
      <section className="description">
        <div className="description-container">
          Commit, React, Deployment, CI/CD, Fullstack... Branża IT pełna jest
          trudnych nazw, zapożyczeń oraz skrótów, w których bardzo łatwo się
          pogubić. Każdy odcinek wyjaśnia kilka z nich. Posłuchaj niezależnie od
          tego czy Twoja przygoda z programowaniem się zaczyna, masz już trochę
          doświadczenia, czy może po prostu chcesz zrozumieć o co chodzi tym
          wszystkim nerdom!
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
