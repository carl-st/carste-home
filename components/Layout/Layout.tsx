import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AdminHeader from '../AdminHeader/AdminHeader';
import globalStyles from '../../styles/global';

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
    <Footer />
  </>
);

export default Layout;