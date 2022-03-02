import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/components";
import { Layout } from "./../components/Layout";

const Home = ({ menu, slices }) => {
  return (
    <Layout menu={menu}>
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const homePage = await client.getSingle("home-page");

  return {
    props: {
      menu,
      slices: homePage.data.slices,
    },
  };
}

export default Home;
