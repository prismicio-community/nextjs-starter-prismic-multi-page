import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";

import Layout from "./../components/Layout";
import { components } from "../slices";

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone slices={props.slices} components={components} />
    </Layout>
  );
};

// Fetch content from prismic
export async function getStaticProps(context) {
  const doc =
    (await createClient({ context }).getByUID("page", context.params.uid)) ||
    {};

  return {
    props: {
      slices: doc.data.body,
    },
  };
}

export async function getStaticPaths() {
  const documents = await createClient().getAllByType("page");
  return {
    paths: documents.map((doc) => `/${doc.uid}`),
    fallback: true,
  };
}

export default Page;
