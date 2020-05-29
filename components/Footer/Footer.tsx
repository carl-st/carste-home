import React from 'react';
import theme from '../../styles/theme';

const Footer: React.FunctionComponent = () => (
  <>
    <style jsx global>{`
      .container {
        background-color: ${theme.colors.mainBrand};
        padding: 4rem 2rem;
      }

      span {
          margin-right: 4px;
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        .container {
          padding: 4rem 20%;
        }
      }
    `}</style>
    <footer className="container">
      <p>
        <span>Fonts Kielo and Planck by Mikko Nuuttila</span>
        <a href="https://mikkonuuttila.com">Website</a>
      </p>
      <p>
        <span>Podcast music by DJ Quads</span>
        <a href="https://soundcloud.com/aka-dj-quads">Soundcloud</a>
      </p>
    </footer>
  </>
);

export default Footer;