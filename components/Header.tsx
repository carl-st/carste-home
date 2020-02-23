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
        min-height: 68px;
        overflow: hidden;
        padding: 10px 40px;
        top: 0;
        transition: height 0.3s ease-in;
        z-index: 1;
      }

      .name-container {
        display: flex;
        align-items: center;
      }

      .name-container .name {
        flex: 1;
        color: ${theme.colors.mainBrand};
        display: inline;
        font-size: 40px;
        font-weight: 100;
        font-family: ${theme.fontFamily.mainBrand};
      }

      .navigation-buttons {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: flex-end;
        max-width: 400px;
        text-align: center;
      }

      .navigation-button {
        background: transparent;
        border: none;
        flex: 1;
        font-family: ${theme.fontFamily.sansSerif};
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 3rem;
        min-width: 120px;
      }
      
      .navigation-button:hover {
        background: ${theme.colors.mainBrand};
        border-radius: 4px;
        color: white;
        cursor: pointer;
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
