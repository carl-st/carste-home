import React from 'react';
import Link from 'next/link';
import theme from '../styles/theme';

const linkStyle = {
  marginRight: 15,
};

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
        justify-content: space-around;
        max-width: 400px;
        text-align: center;
      }
      button {
        background: transparent;
        border: none;
        flex: 1;
        font-family: ${theme.fontFamily.sansSerif};
        font-size: 16px;
        font-weight: 100;
        height: 80%;
        max-width: 120px;
        transform: scale(1);
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      button:hover {
        background: ${theme.colors.mainBrand};
        border-radius: 4px;
        color: white;
      }
    `}</style>
    <div className="navigation">
      <div className="name-container">
        <div className="name">CARSTE</div>
      </div>
      <div className="navigation-buttons">
        <Link href="/">
          <span style={linkStyle}>O mnie</span>
        </Link>
        <Link href="/podcast">
          <span style={linkStyle}>Podkast</span>
        </Link>
        {/* <Link href="/blog">
        <span style={linkStyle}>Blog</span>
      </Link>
      <Link href="/admin">
        <span style={linkStyle}>Admin</span>
      </Link> */}
      </div>
    </div>
  </>
);

export default Header;
