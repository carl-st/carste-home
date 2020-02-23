import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Header from './Header';
import AdminHeader from './AdminHeader';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

type Props = {
  children: ReactNode;
  isAdmin?: boolean;
};

const Layout: NextPage<Props> = ({ isAdmin, children }) => (
  <div style={layoutStyle}>
    {isAdmin ? <AdminHeader /> : <Header />}
    {children}
  </div>
);

export default Layout;
