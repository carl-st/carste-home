import Layout from '../../components/Layout';
import theme from '../../styles/theme';
import Logo from '../../public/img/podcast-waves.svg';

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

        .name-container {
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: ${theme.fontFamily.mono};
          font-size: 2rem;
          text-align: right;
          padding: 20px;
        }

        .logo-container {
          min-width: 90px;
          width: 90px;
          margin-right: 30px;
        }

        .title-container {
          max-width: 180px;
        }

        .cover-image {
          height: 300px;
        }

        .description {
          background-color: ${theme.colors.mainBrand};
          min-height: 500px;
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
            font-size: 5rem;
            padding: 40px;
          }

          .title-container {
            max-width: 400px;
          }

          .cover-image {
            height: auto;
            width: 100%;
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
          <div className="logo-container">
            <Logo />
          </div>
          <div className="title-container">Glosariusz Programisty</div>
        </div>
      </section>
      <section className="description"></section>
    </Layout>
  );
};

export default Admin;
