import React from 'react';
import Link from 'next/link';
import theme from '../styles/theme';

const Header: React.FunctionComponent = () => (
  <>
    <style jsx global>{`
      .navigation {
        background-color: ${theme.colors.lightShades};
        color: black;
        display: flex;
        justify-content: space-between;
        height: ${theme.sizes.mobileHeaderHeight};
        overflow: hidden;
        padding: 10px 40px;
        top: 0;
        transition: height 0.3s ease-in;
        z-index: 1;
        flex-direction: column;
      }

      .name-container {
        display: flex;
        align-items: center;
      }

      .name-container .name {
        flex: 1;
        color: ${theme.colors.mainBrand};
        display: inline;
        font-size: 2rem;
        font-weight: 100;
        font-family: ${theme.fontFamily.mainBrand};
        text-align: center;
      }

      .navigation-buttons {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: flex-end;
        text-align: center;
      }

      .navigation-button {
        background: transparent;
        border: none;
        flex: 1;
        font-family: ${theme.fontFamily.heading};
        font-size: 1.2rem;
        font-weight: 900;
        line-height: 3rem;
        text-transform: uppercase;
        min-width: 120px;
      }

      .navigation-button:hover {
        background: ${theme.colors.mainBrand};
        border-radius: 4px;
        color: white;
        cursor: pointer;
      }

      .menu-button {
        font-size: 1.5rem;
        outline: none;
        background: transparent;
        border: none;
      }

      .fullscreen-menu {
        background-color: white;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        z-index: 2;
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        .menu-button {
          display: none;
        }

        .navigation {
          flex-direction: row;
          height: ${theme.sizes.desktopHeaderHeight};
        }

        .navigation-buttons {
          max-width: 400px;
        }

        .navigation-button {
          font-size: 1.6rem;
        }

        .name-container .name {
          text-align: left;
          font-size: 3rem;
        }
      }
    `}</style>
    <div className="navigation">
      <div className="name-container">
        <div className="name">CARSTE</div>
      </div>
      <div className="navigation-buttons">
        <Link href="/">
          <div className="navigation-button">O mnie</div>
        </Link>
        <Link href="/podcast">
          <div className="navigation-button">Podkast</div>
        </Link>
      </div>
    </div>
  </>
);

export default Header;
