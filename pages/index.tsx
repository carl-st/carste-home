import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
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

      section #lead {
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

      .social {
        display: flex;
        justify-content: space-around;
        width: auto;
        align-items: center;
      }

      .social a {
        background-color: ${theme.colors.lightAccent};
        border: 2px solid ${theme.colors.lightAccent};
        border-radius: 50%;
        text-decoration: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 40px;
        width: 40px;
        max-width: 40px;
        margin: 2px 5px;
        transition: border-color 0.2s linear;
      }

      .social a:hover {
        border: 2px solid ${theme.colors.mainBrand};
      }

      .fontawesome {
        color: ${theme.colors.lightShades};
        cursor: pointer;
        font-size: 1rem;
        text-align: center;
        line-height: 100%;
        align-items: center;
      }
    `}</style>
    <section className="banner">
      <h1 id="typewriter">HELLO.</h1>
      <h2 id="lead">
        Need a professional website or a mobile application? <br />
        Let's do it together!
      </h2>
      <div className="social">
        <a aria-label="E-Mail" className="fontawesome" href="mailto:karol.stepien@me.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a aria-label="LinkedIn" className="fontawesome" href="https://www.linkedin.com/in/carl-st/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a aria-label="GitHub" className="fontawesome" href="https://github.com/carl-st">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a aria-label="Twitter" className="fontawesome" href="https://twitter.com/carlst3">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  </Layout>
);

export default Index;
