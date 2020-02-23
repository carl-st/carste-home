import Layout from '../components/Layout';
import ShareBar from '../components/ShareBar';
import theme from '../styles/theme';

const Index = () => (
  <Layout>
    <style jsx>{`
      .content {
        border: 20px solid ${theme.colors.lightShades};
        border-top: 0;
      }

      section {
        display: flex;
        justify-content: center;
        position: relative;
      }

      section.banner {
        align-items: center;
        color: ${theme.colors.mainBrand};
        flex-direction: column;
      }

      section #typewriter {
        font-family: ${theme.fontFamily.mainBrand};
        font-size: 3rem;
        margin-bottom: 0;
      }

      section .lead {
        max-width: 60vw;
        text-align: center;
        font-size: 1rem;
      }

      div .container {
        flex: 1;
        background-color: ${theme.colors.lightShades};
        border-radius: 4px;
        height: 80%;
        max-width: 200px;
      }
    `}</style>
    <section className="banner">
      <h1 id="typewriter">HEJ!</h1>
      <h2 className="lead">
        Need a professional website or a mobile application? <br />
        Let's do it together!
      </h2>
      <ShareBar />
    </section>
  </Layout>
);

export default Index;
