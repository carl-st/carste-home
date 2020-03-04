import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faSpotify,
  //   faApple,
} from '@fortawesome/free-brands-svg-icons';
import AnchorLogo from '../public/img/anchor-icon.svg';
import theme from '../styles/theme';

const PlayersBar: React.FunctionComponent = () => (
  <>
    <style jsx>{`
      .social {
        display: flex;
        justify-content: space-around;
        width: auto;
      }

      .social a {
        background-color: transparent;
        border: 2px solid white;
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
        color: ${theme.colors.lightShades};
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
        aria-label="YouTube"
        className="fontawesome"
        href="https://www.youtube.com/channel/UCy0fgqSaFsckMDxX5Ulamsg"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        aria-label="Spotify"
        className="fontawesome"
        href="https://open.spotify.com/show/5urLIj00kswGMp4FdABVWg"
      >
        <FontAwesomeIcon icon={faSpotify} />
      </a>
      {/* <a aria-label="Apple Podcast" className="fontawesome" href="">
        <FontAwesomeIcon icon={faApple} />
      </a> */}
      <a
        aria-label="Anchor"
        className="fontawesome"
        href="https://anchor.fm/glosariusz-programisty"
      >
        <AnchorLogo />
      </a>
    </div>
  </>
);

export default PlayersBar;
