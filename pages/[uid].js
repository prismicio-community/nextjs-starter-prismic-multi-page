import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />;
      {/* <div>{props}</div> */}
    </Layout>
  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: process.env.NODE_ENV === "development",
  formatPath: ({ uid }) => ({ params: { uid } }),
});

export default Page;
