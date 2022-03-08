import Head from "next/head";

import { Header } from "./Header";

export const Layout = ({ children, menu }) => {
  return (
    <div className="text-neutral-700 antialiased">
      <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head>
      <Header menu={menu} />
      <main>{children}</main>
    </div>
  );
};
