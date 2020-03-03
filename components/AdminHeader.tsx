import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const AdminHeader: React.FunctionComponent = () => (
  <div>
    <Link href="/">
      <span style={linkStyle}>Site</span>
    </Link>
    <Link href="/Posts">
      <span style={linkStyle}>Posts</span>
    </Link>
    <Link href="/Settings">
      <span style={linkStyle}>Settings</span>
    </Link>
  </div>
);

export default AdminHeader;
