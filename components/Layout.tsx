import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Header from './Header';
import AdminHeader from './AdminHeader';
import globalStyles from '../styles/global';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD',
// };

type Props = {
  children: ReactNode;
  isAdmin?: boolean;
};

const Layout: NextPage<Props> = ({ isAdmin, children }) => (
  <>
    <style jsx global>
      {globalStyles}
    </style>
    {isAdmin ? <AdminHeader /> : <Header />}
    {children}
  </>
);

export default Layout;
