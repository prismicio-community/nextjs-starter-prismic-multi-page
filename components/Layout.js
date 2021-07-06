import React from "react";
import Head from "next/head";
import Header from './Header'
import ExitPreviewButton from './ExitPreviewButton'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
      <ExitPreviewButton />
    </div>
  );
};

export default Layout;
