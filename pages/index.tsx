import { NextPageContext } from 'next';
import React from 'react';

const Index = () => <></>;

Index.getInitialProps = ({ res }: NextPageContext) => {
  if (res) {
    res.writeHead(301, {
      Location: '/home',
    });
    res.end();
  }

  return {};
};

export default Index;
