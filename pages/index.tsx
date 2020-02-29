import Layout from '../components/Layout';
import ShareBar from '../components/ShareBar';
import theme from '../styles/theme';

const Index = () => (
  <Layout>
    <style jsx>{`
      section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        padding: 4rem 2rem;
        align-items: center;
      }

      section.banner {
        color: ${theme.colors.mainBrand};
        background-image: url('/img/background.jpg');
        background-position: center;
        background-size: cover;
        height: calc(100vh - ${theme.sizes.headerHeight});
        align-items: center;
      }

      .image-container {
        flex: 1;
      }

      .text-container {
        flex: 2;
        margin-top: 2rem;
        text-align: center;
      }

      .text-container h1 {
        margin: 0;
      }

      .profile-image {
        max-width: 200px;
        border-radius: 50%;
        border: 8px solid ${theme.colors.mainBrand};
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        section {
          flex-direction: row;
          padding: 0 20% 2rem;
        }

        .text-container {
          flex: 2;
          margin: 0 0 0 4rem;
          text-align: left;
        }
      }
    `}</style>
    <section className="banner">
      <div className="image-container">
        <img className="profile-image" src="/img/profilepic.jpg" />
      </div>
      <div className="text-container">
        <h1>Karol Stępień</h1>
        <h2>Senior Fullstack Engineer</h2>
        <ShareBar />
      </div>
    </section>
  </Layout>
);

export default Index;
