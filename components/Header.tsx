import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const Header: React.FunctionComponent = () => (
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
);

export default Header;
