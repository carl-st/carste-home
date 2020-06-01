import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faTwitch,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import theme from '../../styles/theme';

const ShareBar: React.FunctionComponent = () => (
  <>
    <style jsx>{`
      .social {
        display: flex;
        justify-content: space-around;
        width: auto;
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
        height: 50px;
        width: 50px;
        max-width: 50px;
        margin-right: 5px;
        transition: border-color 0.2s linear;
      }

      .social a:hover {
        border: 2px solid ${theme.colors.mainBrand};
      }

      .fontawesome {
        cursor: pointer;
        font-size: 1.5rem;
        text-align: center;
        line-height: 100%;
        align-items: center; 
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        .social {
          width: auto;
          justify-content: flex-start;
        }

        .social a {
          margin-right: 10px;
        }
      }
    `}</style>
    <div className="social">
      <a
        aria-label="E-Mail"
        className="fontawesome"
        href="mailto:karol.stepien@me.com"
      >
        <FontAwesomeIcon icon={faEnvelope} size="1x"/>
      </a>
      <a
        aria-label="LinkedIn"
        className="fontawesome"
        href="https://www.linkedin.com/in/carl-st/"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        aria-label="GitHub"
        className="fontawesome"
        href="https://github.com/carl-st"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        aria-label="Instagram"
        className="fontawesome"
        href="https://instagram.com/carl_st"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        aria-label="Twitter"
        className="fontawesome"
        href="https://twitter.com/karlos_stepien"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        aria-label="Twitch"
        className="fontawesome"
        href="https://twitch.com/carl_st"
      >
        <FontAwesomeIcon icon={faTwitch} />
      </a>
    </div>
  </>
);

export default ShareBar;
