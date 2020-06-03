import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AdminHeader from '../AdminHeader/AdminHeader';

type Props = {
  children: ReactNode;
  isAdmin?: boolean;
};

const Layout: NextPage<Props> = ({ isAdmin, children }) => (
  <>
    {isAdmin ? <AdminHeader /> : <Header />}
    {children}
    <Footer />
  </>
);

export default Layout;
